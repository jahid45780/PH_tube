 // extra code
 let sortVideo = false;

const handleCategory = async() =>{
    
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const tabContainer  =document.getElementById('tab-container')
    data.data. forEach((category) => {
        console.log(category);
       const div = document.createElement("div");
       div.innerHTML = `
       
       
       <button onclick="handleLoadNews('${category.category_id}')" class="tab  bg-[#d6d4d4] text-2x0 ">${category.category} </button>
       
       
       `;
       
       tabContainer.appendChild(div);


    });

   //  console.log(data.data)
    
}

 // video show container

const handleLoadNews = async (categoryId) => {


const res = await fetch(`  https://openapi.programming-hero.com/api/videos/category/${categoryId} `);
const data = await res.json();

const videoContainer = document.getElementById('video-container');
videoContainer.innerHTML=' ';
 // if sort
 

// error show container

const errorContainer = document.getElementById('error-container');
if(data.data.length == 0){
    errorContainer.classList.remove('hidden');
} 
else{
    errorContainer.classList.add('hidden');
}


data.data.forEach((news)=>{
   // console.log(news.others.posted_date);
let timeShow = news.others.posted_date;
let hours = Math.floor(timeShow/3600 );
let min = Math.floor((timeShow - (hours*60*60) )/60 );



const div = document.createElement('div');
div.innerHTML =`



<div class="card   bg-base-100 shadow-xl">
 <div class="relative" > <img class="w-full h-60" src= ${news?.thumbnail } alt="Shoes" /> 
 
${ timeShow?`  <span class=" absolute right-1 bottom-1 py-1 px-3 inline-block rounded bg-gray-800 text-white bg-opacity-80 ">
 
${hours} hours ${ min } min    </span> `:'' }

 
 </div>
 


<div class=" flex flex-row gap-5 ">
 <div> <img class="w-10 h-9 rounded-full" src= ${news?.authors[0].profile_picture } /> </div>

 <div> 
 
 <h2 class="card-title"> ${news?.title } </h2>


 <div class="gap-3">
 <p class="flex text-1xl items-center gap-4">${news.authors[0].profile_name} <span>
  ${news?.authors[0]?.verified==true? `
     <img src="img/v.avif" class="h-[1rem]"/>` :" "} </p>
     </div>

     <p> ${news?.others.views}  </p>
 
</div>

  </div>

</div>
</div>



`;




videoContainer.appendChild(div);


});


};


 // sort btn

 const sortContent = ()=>{
   sortVideo= true;
   handleLoadNews()


 } 

 
 handleCategory()
 handleLoadNews('1000');



































 
/*    

// show the errorContent

 const errorContent = document.getElementById('errorContent');
 if(withOutSortData.length ===0){
    errorContent.innerHTML= `
    
    <div class = "flex justify-center items-center">
    <div class = "w-3/4 mx-auto text-center">
    <div class ="mb-6 w-45 mx-auto">
    <img class = "w-full" src="img/Icon.png" />
    </div>
    </div>
    <h3 class="font-bold text-5xl"> Oops!! Sorry User, There is no Content Here </h3>
    </div>

    </div>
    </div>
    
    
    
    `;

 } else{
    errorContent.innerHTML=""
 };


*/
 