let users = [
  {
    username: "jon due",
    userimage: "image/avatar3.png",
    userinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur, atque a possimus est quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi est, consectetur quidem eaque praesentium amet qui ipsa facilis maiores, dolore molestiae pariatur reprehenderit inventore quis dolor? Enim, saepe rem!",
    userdesc: "eligendi magnam sunt impedit officia eveniet ipsam iure alias! Molestias commodi voluptatum officii"
  },
  {
    username: "Jason",
    userimage: "image/avatar2.png",
    userinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur, atque a possimus est eligendi magnam sunt impedit officia eveniet ipsam iure alias! Molestias Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi est, consectetur quidem eaque praesentium amet qui ipsa facilis maiores, dolore molestiae pariatur reprehenderit inventore quis dolor? Enim, saepe rem!",
    userdesc: "commodi voluptatum officiis autem dolorum."
  },
  {
    username: "Katie",
    userimage: "image/avatar5.png",
    userinfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur, atque a possimus est quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi est, consectetur quidem eaque praesentium amet qui ipsa facilis maiores, dolore molestiae pariatur reprehenderit inventore quis dolor? Enim, saepe rem!",
    userdesc: "commodi voluptatum officiis autem dolorum."
  }
];

document.getElementById("title").innerText = "users";

function getuser(i) {
  document.getElementById("username").innerText = users[i].username;
  document.getElementById("pic").src = users[i].userimage;
  document.getElementById("info").innerText = users[i].userinfo;
  document.getElementById("desc").innerText = users[i].userdesc;
}

getuser(0);
