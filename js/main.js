 $(window).on("load", function(){
 $('#header').vide('video/vzh',{
  
 })
 });
 const now = new Date();
 const day = now.getDate();
 let month = now.getMonth();
 let year = now.getFullYear();

 if(location.pathname.includes('portfolio')){
  var galleryThumbs = new Swiper('.gallery-thumbs', {
   spaceBetween: 10,
   loop: true,
   slidesPerView: 7,
   freeMode: true,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   breakpoints: {
    320: {
      slidesPerView: 1
    },
    380: {
      slidesPerView: 2
    },
    640: {
        slidesPerView: 3
    },
    1000: {
        slidesPerView: 4
    }
  }
  });
  var galleryTop = new Swiper('.gallery-top', {
   spaceBetween: 10,
   loop: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
   thumbs: {
    swiper: galleryThumbs
   }
  });
 }
 document.addEventListener("click",function (e){
  if(e.target.classList.contains("register-button")){
   document.querySelector('.form-popap').classList.add("form-popap-active")

  }
  if(e.target.classList.contains("login-user-button")){
    document.querySelector('.form-user-login-popap').classList.add("form-user-login-popap-active")
    console.log(1)
   }
   if(e.target.classList.contains("register-user-button")){
    document.querySelector('.form-user-popap').classList.add("form-user-popap-active")
    console.log(1)
   }
   if(e.target.classList.contains("register-close")){
    document.querySelector('.form-user-popap').classList.remove("form-user-popap-active")
    console.log(1)
   }
   if(e.target.classList.contains("fa-times")){
    document.querySelector('.form-popap').classList.remove("form-popap-active")
   }
   if(e.target.classList.contains("login-close")){
    document.querySelector('.form-user-login-popap').classList.remove("form-user-login-popap-active")
    console.log(1)
   }
  if(e.target.classList.contains("form-popap")){
   document.querySelector('.form-popap').classList.remove("form-popap-active")
  }
 } )
const burgerMenu = document.querySelector('.fa-bars'),
      registerButtons = document.querySelector('.register_buttons');

burgerMenu.addEventListener('click', ()=>{
  console.log(1);
  registerButtons.classList.toggle('register-active-buttons');
})
 // document.addEventListener("scroll", function(e){
 //     if(document.documentElement.scrollTop > 500){
 //         console.log(1)
 //     }
 // })
 AOS.init({
  once : true
 });
 const rooms = [
  {
   numOfPeople : 1 ,
   photos : '1.jpg,2.jpg',
      numOfRoom : '1',
  },
  {
   numOfPeople : 2 ,
   photos : '1.jpg,2.jpg',
      numOfRoom : '1',
  },
  {
   numOfPeople : 3 ,
   photos : '1.jpg,2.jpg',
  numOfRoom : '2',
  },
  {
   numOfPeople : 4 ,
   photos : '1.jpg,2.jpg',
      numOfRoom : '2',
  }

];

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}
let daysOnLoad = daysInMonth(month, year);
const renderBookingTable=(days)=>{
       const wrapper = document.querySelector('.booking-table-content');
       wrapper.innerHTML='';
       for(let i = 1; i<=days; i++){
          const div = document.createElement('div');
          div.classList.add('booking-table-day');
          div.innerText = i;
          wrapper.append(div);
       }
}


const filterRooms = (arr, people, elem)=> {
     elem.innerHTML = '<option value="0">Доступні номера</option>';
     const newArr = arr.filter(({numOfPeople})=>numOfPeople==people)
     console.log(newArr)
     if(newArr.length>0){
       newArr.forEach(item=>{
          const wrapper = document.createElement('option')
          wrapper.setAttribute('value', item.numOfRoom)
          wrapper.innerText= item.numOfRoom;
          elem.append(wrapper)
         
       })
       elem.style.display='block';
     } else{
      elem.style.display='none';
     }
}
document.addEventListener('change', (e)=>{
     const target = e.target;
     console.log(target)
     if(target.classList.contains('rooms')){
      const bookingTable = document.querySelector('.booking-table');
      bookingTable.style.display = 'block';
     }
     if(target.classList.contains('rooms-select')){
      console.log(target)
       const value = target.value;
       const wrapper = document.querySelector('select[name="rooms"]')
       filterRooms(rooms, value, wrapper)
     }
     

})
document.addEventListener('click', (e)=>{
   if(e.target.classList.contains('next')){
     if(month>=12){
       month = 1;
       year = ++year;
     } else{
       month = ++month;
     }
     daysOnLoad = daysInMonth(month, year);
     console.log(daysOnLoad)
     renderBookingTable(daysOnLoad);  
   }
   if(e.target.classList.contains('prev')){
     const date = new Date(year, month);
     if(date>now){
          if(month<=1){
            month=12;
            year = --year;
          } else{
          month = --month;
          }
     } else{
       console.log('error')
     }
     daysOnLoad = daysInMonth(month, year);
     renderBookingTable(daysOnLoad);  

     
   
  }
  console.log(month, year)
})
renderBookingTable(daysOnLoad)



