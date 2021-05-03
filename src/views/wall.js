export default () => {
    const wall = document.createElement("div");
    wall.setAttribute("class", "wall-page");
    wall.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#5F5F5F;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" style="background-color: #09D1E1; color: white;" >Search</button>
             </form>
            </div>
        </div>
    </nav>

    <form style="width: 18rem; border-color= #eeeeee" >
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Post</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post here..."></textarea>
        </div>
        <button class="btn btn-primary">To post</button>
    </form>
    `
    return wall;
}