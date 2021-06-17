import { Component } from "react";
import Trx_tesService from "../services/trx_tes.service";

export default class AddData extends Component {
    constructor(props) {
        super(props);
        this.onChangeNama = this.onChangeNama.bind(this);
        this.onChangeAngka = this.onChangeAngka.bind(this);
        this.saveTrx = this.saveTrx.bind(this);
        this.newTrx = this.newTrx.bind(this);

        this.state = {
            nama: "",
            Angka: ""
        };
    }

    onChangeNama(e) {
        this.setState({
            nama: e.target.value
        });
    }

    onChangeAngka(e) {
        this.setState({
            angka: e.target.value
        });
    }

    saveTrx() {
        var data = {
            nama: this.state.nama,
            angka: this.state.angka
        };

        Trx_tesService.create(data)
            .then(response => {
                this.setState({
                    nama: response.data.nama,
                    angka: response.data.angka,
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTrx() {
        this.setState({
            nama: "",  
            angka: ""
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newTrx}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="nama">Nama</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama"
                                required
                                value={this.state.nama}
                                onChange={this.onChangeNama}
                                name="nama"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="angka">Angka</label>
                            <input
                                type="text"
                                className="form-control"
                                id="angka"
                                required
                                value={this.state.angka}
                                onChange={this.onChangeAngka}
                                name="angka"
                            />
                        </div>

                        <button onClick={this.saveTrx} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}