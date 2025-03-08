export default function Coba() {
  return (
    <div>
      <div className="ModalBox">
        <form>
          <div className="p-2 ">
            <div className=" m-2">
              <input
                type="text"
                className="rounded-5 mb-3 form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Kebutuhan"
              />
              <input
                type="text"
                className="rounded-5 form-control"
                id="exampleInputPassword1"
                placeholder="Total"
              />
            </div>
            <div className=" m-2 form-group">
              <textarea
                typeof="text"
                className=" modal-keterangan form-control"
                id="exampleInputPassword1"
                placeholder="keterangan"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
        <i
          className="fs-5 bi bi-x-circle-fill"
          style={{ position: "absolute", top: "2%", right: "3%" }}
        ></i>
      </div>
    </div>
  );
}
