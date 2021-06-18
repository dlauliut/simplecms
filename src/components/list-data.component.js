import Trx_tesService from "../services/trx_tes.service";
//import { Link } from "react-router-dom";
import { Component } from "react";

export default class ListData extends Component{
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTrx = this.retrieveTrx.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTrx = this.setActiveTrx.bind(this);
        //this.removeAllTrx = this.removeAllTrx.bind(this);
        //this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            trs_tests: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount(){
        this.retrieveTrx();
    }

    onChangeSearchTitle(e){
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveTrx(){
        Trx_tesService.getAll()
            .then(response => {
                this.setState({
                    nama: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveTrx();
        this.setState({
          currentTutorial: null,
          currentIndex: -1
        });
    }

    setActiveTrx(tutorial, index) {
        this.setState({
          currentTutorial: tutorial,
          currentIndex: index
        });
    }

    render(){
        const { searchTitle, trs_tests, currentTutorial, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by nama"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Tutorials List</h4>

                    <ul className="list-group">
                        {trs_tests &&
                        trs_tests.map((tutorial, index) => (
                            <li
                            className={
                                "list-group-item " +
                                (index === currentIndex ? "active" : "")
                            }
                            onClick={() => this.setActiveTutorial(tutorial, index)}
                            key={index}
                            >
                            {tutorial.title}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllTutorials}
                    >
                        Remove All
                    </button>
                </div>
            </div>
        )
    }

}