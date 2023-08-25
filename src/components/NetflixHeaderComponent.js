export default function NetflixHeaderComponent () {
    return (
            <div>
                <div className="d-flex justify-content-between">
                   <div>
                   <h2 className="text-danger p-4">NETFLIX</h2>
                   </div>
                   <div className="input-group w-25 p-3  m-2">
                    <select className="form-select m-2">
                        <option>Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="btn btn-danger  m-2"> Sign In</button>
                   </div> 
                </div>
            </div>
    );
}