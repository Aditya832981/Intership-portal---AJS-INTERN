const express= require("express");
const app = express();
const hbs= require("hbs")
const mongoose=require ("mongoose")
const routes = require("./routes/main")
const Detail=require("./models/Detail")

const Slider=require("./models/Slider")
app.use('/static',express.static("public"))
const Service=require("./models/Service")

const bodyParser=require("body-parser")


//template engine

app.set('view engine',"hbs")
app.set("views","views")
hbs.registerPartials("views/partials")
app.use(bodyParser.urlencoded({
  extended:true
}))


app.use('',routes)  

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/Internshipportal');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('MongoDB connected');

  // Service.create([
  //   {
  //     icon:'fab fa-accusoft',
  //     title:"provide best courses",
  //     description: "we provide courses thst help our student in learning and in placement.",
  //     linkText:"Check",
  //     link:"https://www.google.com"
  //   },
  //   {
  //     icon:'fab fa-affiliatetheme',
  //     title:"Learn projects",
  //     description: "we provide courses thst help our student in learning and in placement.",
  //     linkText:"Learn",
  //     link:"https://www.google.com"
  //   },
  //   {
  //     icon:'fab fa-affiliatetheme',
  //     title:"Learn projects",
  //     description: "we provide courses thst help our student in learning and in placement.",
  //     linkText:"Learn",
  //     link:"https://www.google.com"
  //   }
  // ])









  // Slider.create([
  //   {
  //     title:'learn javain very easy manner',
  //     subTitle:"java is one the most popular ",
  //     imageUrl:"/static/images/s1.png"
  //   },
  //   {
  //     title:'What is django is python',
  //     subTitle:"django is one the most popular ",
  //     imageUrl:"/static/images/s2.png"
  //   },
  //   {
  //     title:'what about node js',
  //     subTitle:"node js is one the most popular ",
  //     imageUrl:"/static/images/s3.png"
  //   },
  // ])








  // Detail.create({
  //   brandName: "INTERNSHIP SEARCHER" ,
  //   brandIconUrl : "https://yt3.googleusercontent.com/ytc/AIdro_kl1Kpx9FsZnF23AFKKfmd2ojl2OXxw3a4GpiRd9Gv9VQ=s160-c-k-c0x00ffffff-no-rj ",
  //   links:[
  //       {
  //           label: "Home",
  //           url:"/"
  //       },
  //       {
  //         label: "Services",
  //         url:"/Services"
  //     },
  //     {
  //       label: "Gallery",
  //       url:"/gallery"
  //     },
  //     {
  //       label: "About",
  //       url:"/about"
  //     },
  //     {
  //       label: "Contact Us",
  //       url:"/contact-us"
  //     },

  //   ]
  //   })

});




app.listen(process.env.Port | 5555,()=>{
    console.log("server started")
});
