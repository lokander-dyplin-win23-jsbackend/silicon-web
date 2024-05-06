
export default function AccountBasic() {
    return (
       <> <section className="basic-info">
            <form method="post" noValidate>
                <h2>Account Details</h2>
                <h5>Basic Info</h5>
                <div className="content">
                    <div id="form-firstname" className="input-group">
                        <label>Firstname</label>
                        <span></span>
                        <input asp-for="Basic!.FirstName" />
                    </div>
                    <div id="form-lastname" className="input-group">
                        <label>Lastname</label>
                        <span></span>
                        <input asp-for="Basic!.LastName" />
                    </div>
                    <div id="form-email" className="input-group">
                        <label>Email</label>
                        <span></span>
                        <input></input>
                    </div>
                    <div id="form-phone" className="input-group">
                        <label asp-for="Basic!.PhoneNumber"></label>
                        <input asp-for="Basic!.PhoneNumber" />
                    </div>
                    <div id="form-bio" className="input-group">
                       <textarea></textarea>
                    </div>
                    <div className="form-buttons">
                        <button className="btn-gray" type="reset">Cancel</button>
                        <button className="btn-theme" type="submit">Save changes</button>
                    </div>
                </div>
            </form>
        </section></>
    );}