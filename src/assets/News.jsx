import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    page: 1,
    category: "general",
  };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  // };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    // console.log("News from constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.props.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  // handlePrevClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   } else {
  //     let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-21&sortBy=publishedAt&apiKey=82e124dbd5b541e699bfbab445d1d61c&page-${
  //       this.state.page - 1
  //     }&pageSize=20`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //     });
  //   }
  // };
  // handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   } else {
  //     let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-21&sortBy=publishedAt&apiKey=82e124dbd5b541e699bfbab445d1d61c&page-${
  //       this.state.page + 1
  //     }&pageSize=20`;
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //     });
  //   }
  // };

  render() {
    return (
      <div className="flex flex-wrap justify-center container my-3 bg-slate-200 items-center">
        <div className="loader flex flex-col">
          <h2 className="flex text-center font-semibold text-gray-700 p-5 text-[2rem] mt-14">
            NewsApp - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>

          {this.state.loading && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          // hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row columns-3 m-1 flex flex-row flex-wrap justify-center w-auto md:space-x-5">
            {/* {this.state.articles.slice(0, 15).map((element) => { */}
            {this.state.articles.map((element, index) => {
              return (
                <div className=" col-md-4 my-5" key={index}>
                  <NewsItem
                    key={element.url}
                    // title={element.title ? element.title.slice(0, 45) : ""}
                    title={element.title}
                    // description={
                    // element.description ? element.description.slice(0, 88) : ""
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container2 flex justify-center">
          <button className="bg-white hover:bg-black text-black hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow m-5 ">
            load more
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
