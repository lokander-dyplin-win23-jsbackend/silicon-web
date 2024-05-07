export default function AccountProfile() {
    return (
<section className="AccountProfile">
   <div className="profile">
       <div className="profile-pic">
           <img src="./images.jpg" />
       </div>
       <form encType="multipart/form-data" method="post" asp-action="UploadProfileImage" asp-controller="Account">
       <input id="fileUploader" type="file" name="file" hidden/>    
       <label htmlFor="fileUploader" className="btn btn-circle btn-circl-sm"><i className="fa-regular fa-refresh"></i></label>
       </form>
       <div className="profile-info">
           <h5 className="displayname"> @user.FirstName @user.LastName</h5>
           <p>@user.Email</p>
       </div>
   </div>
   <nav>
       <a className="btn-theme-s" asp-controller="Account" asp-action="Details">Account Details</a>
       <a className="btn-transparent" asp-controller="Auth" asp-action="SignOut">Sign out</a>
   </nav>
</section>
    );}