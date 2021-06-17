import http from "../http-common";

class Trx_testDataService {
    getAll() {
        return http.get("/trx_tests");
    }

    get(id) {
        return http.get("/trx_tests/$"+{id});
    }

    create(data) {
        return http.post("/trx_tests",data);
    }

    update(id, data) {
        return http.put(`/trx_tests/${id}`,data);
    }

    delete(id) {
        return http.delete(`/trx_tests/${id}`);
    }
}
export default new Trx_testDataService();