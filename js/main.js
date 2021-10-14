//  $(window).on("load", function(){
//  $('#header').vide('video/vzh',{
  
//  })
//  });
//    localStorage.clear();
//  const now = new Date();
//  const day = now.getDate();
//  const newMonth = now.getMonth()+1;
//  const newYear = now.getFullYear();
//  let month = now.getMonth()+1;
//  let year = now.getFullYear();
//  let firstDate;
//  let secondDate;
//  let active = [];
//  const formUpdate = document.querySelector('.order_up')
//  function bookedRooms(value){
//   const reserves = document.querySelectorAll(`.reserve-active`);
//   reserves.forEach(item=>{
//     item.classList.remove('date-booked')
//   })
// if(value!=0){
//   fetch(`../test.php?numOfRoom=${value}`)
//   .then(response=>response.json())
//   .then(data=>{
//     if(data){
//     data.forEach(date=>{
      
//      const arr = date.split(',')
//      console.log(arr)
//       // console.log(data)
      
//       arr.forEach(el=>{
//         if(formUpdate.getAttribute('data-update')){
//           fetch('../update.php')
//           .then(res=>res.json())
//           .then(data=>{
//             console.log(data)
//             const oldDates = data['dates'].split(',');
//             oldDates.forEach(last=>{
//               const btnUnactive = document.querySelector(`.reserve-active[date="${el}"]`);
//               if(btnUnactive!=null){
//                 btnUnactive.classList.add('date-booked')
//               }
//               if(el!=last){
//                 const btn = document.querySelector(`.reserve-active[date="${last}"]`);
                
//                 if(btn!=null){
//                   btn.classList.remove('date-booked')
//                   btn.classList.add('booking-btn-active')
//                 }
//               }
//             })
//             })
//         } else{
//           const btnUnactive = document.querySelector(`.reserve-active[date="${el}"]`);
//                 if(btnUnactive!=null){
//                   btnUnactive.classList.add('date-booked')
//                 }
//        }
      
//         })
      
       
//   })
// }
// })

// }
//  }
 
 
//  if(location.pathname.includes('portfolio')){
//   var galleryThumbs = new Swiper('.gallery-thumbs', {
//    spaceBetween: 10,
//    loop: true,
//    slidesPerView: 7,
//    freeMode: true,
//    watchSlidesVisibility: true,
//    watchSlidesProgress: true,
//    breakpoints: {
//     320: {
//       slidesPerView: 1
//     },
//     380: {
//       slidesPerView: 2
//     },
//     640: {
//         slidesPerView: 3
//     },
//     1000: {
//         slidesPerView: 4
//     }
//   }
//   });
//   var galleryTop = new Swiper('.gallery-top', {
//    spaceBetween: 10,
//    loop: true,
//    navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//    },
//    thumbs: {
//     swiper: galleryThumbs
//    }
//   });
//  }
//  document.addEventListener("click",function (e){
//   if(e.target.classList.contains("register-button")){
//    document.querySelector('.form-popap').classList.add("form-popap-active")

//   }
//   if(e.target.classList.contains("login-user-button")){
//     document.querySelector('.form-user-login-popap').classList.add("form-user-login-popap-active")
//    }
//    if(e.target.classList.contains("register-user-button")){
//     document.querySelector('.form-user-popap').classList.add("form-user-popap-active")
//    }
//    if(e.target.classList.contains("register-close")){
//     document.querySelector('.form-user-popap').classList.remove("form-user-popap-active")
//    }
//    if(e.target.classList.contains("fa-times")){
//     document.querySelector('.form-popap').classList.remove("form-popap-active")
//    }
//    if(e.target.classList.contains("login-close")){
//     document.querySelector('.form-user-login-popap').classList.remove("form-user-login-popap-active")
//    }
//   if(e.target.classList.contains("form-popap")){
//    document.querySelector('.form-popap').classList.remove("form-popap-active")
//   }
//  } )
// const burgerMenu = document.querySelector('.fa-bars'),
//       registerButtons = document.querySelector('.register_buttons');

// burgerMenu.addEventListener('click', ()=>{
//   registerButtons.classList.toggle('register-active-buttons');
// })
//  // document.addEventListener("scroll", function(e){
//  //     if(document.documentElement.scrollTop > 500){
//  //         console.log(1)
//  //     }
//  // })
//  AOS.init({
//   once : true
//  });
//  const rooms = [
//   {
//    numOfPeople : 1 ,
//    photos : '1.jpg,2.jpg',
//       numOfRoom : 'двохмісний',
//   },
//   {
//    numOfPeople : 2 ,
//    photos : '1.jpg,2.jpg',
//       numOfRoom : 'двохмісний',
//   },
//   {
//    numOfPeople : 3 ,
//    photos : '1.jpg,2.jpg',
//   numOfRoom : '2х двохмісний',
//   },
//   {
//    numOfPeople : 4 ,
//    photos : '1.jpg,2.jpg',
//       numOfRoom : '2х двохмісний',
//   },
//   {
//     numOfPeople : 5 ,
//     photos : '1.jpg,2.jpg',
//        numOfRoom : '3х двохмісний',
//    },
//    {
//     numOfPeople : 6 ,
//     photos : '1.jpg,2.jpg',
//        numOfRoom : '3х двохмісний',
//    }

// ];
// const writeZero = (num)=>{
//      if(num<10){
//        return `0${num}`
//      } else{
//        return num
//      }
// }
// const daysInMonth = (month, year) => {
//   return new Date(year, month, 0).getDate();
// }
// let daysOnLoad = daysInMonth(month, year);





// const filterRooms = (arr, people, elem)=> {
//      elem.innerHTML = '<option value="0">Доступні номера</option>';
//      const newArr = arr.filter(({numOfPeople})=>numOfPeople==people)
//      if(newArr.length>0){
//        newArr.forEach(item=>{
//           const wrapper = document.createElement('option')
//           // wrapper.setAttribute('value', item.numOfRoom)
//           wrapper.innerText= item.numOfRoom;
//           elem.append(wrapper)
         
//        })
//        elem.style.display='block';
//      } else{
//       elem.style.display='none';
//      }
// }
// const setDate = (btn)=>{
//   allLocalKeys.push(btn.textContent)
// btn.classList.add('booking-btn-active')
// localStorage.setItem(`id${btn.getAttribute('date')}`, btn.textContent)
// }

// let changed;


//   document.addEventListener('change', (e)=>{
//     console.log(e.target.value)
//     const target = e.target;
//     changed = true;

//     if(target.classList.contains('rooms')){
//       console.log(1111)
//      const bookingTable = document.querySelector('.booking-table');
//      bookingTable.style.display = 'block';
//      const value = target.value;
     
//       bookedRooms(value)
      
//      localStorage.setItem('room', value)
     
//     }
    
    
//     if(target.classList.contains('rooms-select')){
//       console.log(11)
//       const value = target.value;
//       console.log(value)
//       const wrapper = document.querySelector('select[name="rooms"]')
//       filterRooms(rooms, value, wrapper)
      
//     }
    
    
    
  
// }) 
// if(formUpdate.getAttribute('data-update')=='update'&&!changed){
//   console.log(1)
//   fetch('../update.php')
//   .then(res=>res.json())
//   .then(data=>{
//     const bookingTable = document.querySelector('.booking-table');
//      bookingTable.style.display = 'block';
//      const value = data['number_of_rooms'];
//      console.log(value)
//      bookedRooms(value)
//      localStorage.setItem('room', value)
//       const people = data['number_of_people'];
//       console.log(people)
//       const wrapper = document.querySelector('select[name="rooms"]')
//       wrapper.style='display: block;'
//       const option = document.createElement('option')
//           // wrapper.setAttribute('value', item.numOfRoom)
//           option.innerText= data['number_of_rooms'];
//           wrapper.append(option)
//     })
// }

// // else{
// //   const wrapper = document.querySelector('select[name="rooms"]')
// //   filterRooms(rooms, value, wrapper)
// //   const bookingTable = document.querySelector('.booking-table');
// //   bookingTable.style.display = 'block';
 
// //   bookedRooms(value)
// //   localStorage.setItem('room', value)
// // }

// let reserveActive;
// let allLocalKeys = [];
// const dateNameBlock = document.querySelector('.data-number');
// let arrData = [];
// const renderBookingTable=(days)=>{
//   const wrapper = document.querySelector('.booking-table-content');
//   const activeBtns = document.querySelectorAll('.booking-btn-active')
//   dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
//   wrapper.innerHTML='';
  
//   for(let i = 1; i<=days; i++){
//      const div = document.createElement('div');
//      div.classList.add('booking-table-day');
//      div.innerText = i;
    
//       if(year==newYear && month==newMonth && i<=day){
//         div.style.backgroundColor='red';
//       } else{
        
//         div.classList.add('reserve-active')
//         div.setAttribute('date', new Date(year, month-1, i))
        
//       }
      
      
//      wrapper.append(div);
    
//   }
  
//     const reserveActiveBtns = document.querySelectorAll('.reserve-active')
//         reserveActiveBtns.forEach(item=>{
//           if(item.textContent==localStorage.getItem(`id${item.getAttribute('date')}`)){
//             item.classList.add('booking-btn-active')
//             item.setAttribute('date', new Date(year, month-1, item.textContent))
//             // arrData.push(item.getAttribute('date'))
//             // console.log(arrData)
//           }
//         })

//         const formUpdate = document.querySelector('.order_up')
//         if(formUpdate.getAttribute('data-update')){
//           console.log(1111111)
//         let arr = [];
//          fetch('../update.php')
//          .then(res=>res.json())
//          .then(data=>{
//            const dates = data['dates']
//            console.log(dates)
//             arr = dates.split(',');
        
//            const reserveActiveBtns = document.querySelectorAll('.reserve-active')
//            arr.forEach(el=>{
//             reserveActiveBtns.forEach(item=>{
//               if(el==item.getAttribute('date')){
//                 item.classList.add('booking-btn-active')
//                 item.setAttribute('date', new Date(year, month-1, item.textContent))
//                 setDate(item)
//               }
//             })
//            })
           
//          })
//        }
  
// }
// let counter;
// let min;
// let localKeys;
// let globalDate;
// let clicked;
// let nextMonth;
// let maxDay;
// let equal;
// let minDay;
// let normal;
// let next;
// let noSet;
// let nextClicked;
// let prevClicked;
// let lastKey;

// const controlCount = ()=>{
  
//   if(clicked=='yes'&&nextClicked){
//     console.log('no')
//     noSet = 1;
//   } else{
//     noSet = '';
//   }
 
// }
// const actionDay = (elem, day, action)=>{
  
//   if(month>newMonth&&year>=newYear&&clicked=='yes'&&!equal){
//     if(action=='+'){
//       if(elem.textContent==day+1){
//         elem.classList.remove('booking-btn-active')


//       }
//     } else{
//       if(elem.textContent==day-1){
//         elem.classList.remove('booking-btn-active')
//       }
//     }
    
//   } else{
//     if(action=='+'){
//       maxDay = ++day;
//     } else{
//       minDay = --day;
//     }  
    
//     allLocalKeys.push(elem.textContent)
//     // console.log(allLocalKeys)
//     localStorage.setItem(`id${elem.getAttribute('date')}`, elem.textContent)
//     elem.classList.add('booking-btn-active')
//     arrData.push(elem.getAttribute('date'))
//   }
// }
// const reserveActionDay = (elem, day, action)=>{
  
//     if(action=='+'){
//       maxDay = --day;
//     } else{
//       minDay = ++day;
//     }
    
//     elem.classList.remove('booking-btn-active')
//     arrData  = arrData.filter(item=>elem.getAttribute('date')!=item)
//     localStorage.removeItem(`id${elem.getAttribute('date')}`)
//     allLocalKeys.forEach((item, key)=>{
//       if(item==elem.textContent){
//         allLocalKeys = allLocalKeys.filter(item=>{
//             if(item!=elem.textContent){
//               return item;
//             }
//          })
//       }
//     })
//     // console.log(allLocalKeys)
  
// }

// document.addEventListener('click', (e)=>{
  
  
//   const data = new Date(year, month - 1)
  
//   if(e.target.classList.contains('booking-btn-active')){
    
//     if(Number(e.target.textContent)==maxDay){
//       reserveActionDay(e.target, maxDay, '+')
//     }
//     if(Number(e.target.textContent)==minDay){
//       reserveActionDay(e.target, minDay, '-')
//     }
//     const activeBtns = document.querySelectorAll('.booking-btn-active')
//     if(activeBtns.length==0&&!equal){
//       maxDay = '';
//       minDay = '';
//     }
   
   
    
//     if(localStorage.getItem('nextdate')){
//       localStorage.setItem('clicked_month', String(localStorage.getItem('nextdate')).slice(0,1))
//       // localStorage.setItem('clicked_year', localStorage.getItem('nextdate'))
//     }
//     if(arrData.length==0){
//       localStorage.removeItem('clicked_month')
//       localStorage.removeItem('clicked_year')
//     }
     
    
    
//     console.log(noSet)
//     if(!noSet){
//       min = Math.min(...allLocalKeys)
//       max = Math.max(...allLocalKeys)
//       localStorage.setItem(`min`, min)
//       localStorage.setItem(`max`, max)
//     }
      
      
//      counter = 1;
//   } else{
//     counter = 0;
//   }
  
//   if(e.target.classList.contains('reserve-active')){
//     const priceNum = document.querySelector('.price_number')
//     const priceBlock = document.querySelector('.price')
    
//     priceBlock.style.display = 'flex';
    
//       if(counter==0){
//         if(!maxDay&&!minDay){
//             setDate(e.target);
//             arrData.push(e.target.getAttribute('date'))
//             maxDay = Number(e.target.textContent);
//             minDay = Number(e.target.textContent);
//         }
//        let days = daysInMonth(month-1, year);
//         if(maxDay==days&&Number(e.target.textContent)==1){
//           equal='yes';
//           // allLocalKeys.push(e.target.textContent)
//           // e.target.classList.add('booking-btn-active')
//           controlCount()
          
//           setDate(e.target);
//           arrData.push(e.target.getAttribute('date'))
//           const actives = document.querySelectorAll('.booking-btn-active')
//           maxDay = Number(actives[actives.length-1].textContent);
//           // localStorage.setItem(`id${e.target.getAttribute('date')}`, e.target.textContent)
//         // } else{
          
//         //     if(!equal){
//         //       console.log('no equal')
//         //       maxDay = maxDay + 1;
//         //       console.log(maxDay)
//         //     } 
            
           
//         }
        
//         if(maxDay+1==e.target.textContent){
          
//           controlCount()
//           normal = 'ok';
//           actionDay(e.target, maxDay, '+')
              
          
//         } else{
//           normal = '';
//         }
//         if(minDay-1==e.target.textContent){
//           controlCount()
//           normal = 'ok';
//           actionDay(e.target, minDay, '-')
          
//         } else{
//           normal = '';
//         }
        
//     }
//     const activeBtns = document.querySelectorAll('.booking-btn-active')
//     dateNameBlock.innerHTML = `<p>${writeZero(e.target.textContent)} ${writeZero(month)} ${year}</p>`
//     // if(counter==0){
//     //   arrData.push(e.target.getAttribute('date'))
      
//     // }
    
//       if(counter==0){
//         if(arrData.length==1&&!noSet){
//           localStorage.setItem('clicked_month', month)
//           localStorage.setItem('clicked_year', year)
//         }

//         if(!noSet){
//           console.log(noSet)
//           min = Math.min(...allLocalKeys)
//           max = Math.max(...allLocalKeys)
//           localStorage.setItem(`min`, min)
//           localStorage.setItem(`max`, max)
//         } 
        
//     } else{
//       if(arrData.length==0){
//         localStorage.removeItem(`min`)
//         localStorage.removeItem(`max`)
        
//         dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
//       }
//       if(activeBtns.length==0&&next==1){
//         console.log(123)
//         localStorage.removeItem('nextdate')
//         localStorage.removeItem('nextmaxdate')
        
//       }
//       if(activeBtns.length==0&&next!=1){
//         lastKey = 1;
//         noSet = '';
//         localStorage.removeItem('max')
//         localStorage.removeItem('min')
//       }
//     }
     
    
    
//     //  if(activeBtns.length==0&&localStorage.length==0){
//     //   dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
//     // }
//     if(activeBtns.length>1){
//       console.log(1)
//       dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent}-${activeBtns[activeBtns.length-1].textContent} ${writeZero(month)} ${year}</p>`
//      } 
//      if(prevClicked&&localStorage.getItem('nextdate')){
//       dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
//      }
//      if(month==newMonth&&year==newYear){
       
//        if(arrData.length==1){
//         dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent} ${writeZero(month)} ${year}</p>`

//        }
//        if(localStorage.getItem('nextdate')&&activeBtns.length==0){

//         dateNameBlock.innerHTML = `<p>${localStorage.getItem('nextdate')}</p>`
//          //
//        }
//      }
//      if(month>newMonth&&year>=newYear&&clicked=='yes'){
//       const activeBtns = document.querySelectorAll('.booking-btn-active')
       
//       if(activeBtns.length!=0){
        
//         dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))}  ${writeZero(newMonth)} ${newYear} - ${writeZero(activeBtns[activeBtns.length-1].textContent)} ${writeZero(month)} ${year}</p>`
//         localStorage.setItem('nextdate', `${writeZero(activeBtns[0].textContent)} - ${writeZero(activeBtns[activeBtns.length-1].textContent)} ${writeZero(month)} ${year}`)      // if(activeBtns.length>1&&localStorage.length==0){
//         localStorage.setItem('nextmaxdate', `${writeZero(activeBtns[activeBtns.length-1].textContent)} ${writeZero(month)} ${year}`)      // if(activeBtns.length>1&&localStorage.length==0){

//       } else{
//          if(normal=='yes'){

//           dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))} - ${writeZero(localStorage.getItem(`max`))} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
//          } 
//          else{
//            if(arrData.length>1){
//             dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))} - ${writeZero(localStorage.getItem(`max`))} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`

//            } else{
//             dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))}  ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`

//            }
           
//           }

//       }
//       //   dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent}-${activeBtns[activeBtns.length-1].textContent} ${writeZero(month)} ${year}</p>`
//       //  } else{
//       //   dateNameBlock.innerHTML = `<p>${localStorage.getItem('min')} ${writeZero(newMonth)} ${newYear}-${activeBtns[activeBtns.length-1]} ${writeZero(month)} ${year}</p>`
//       //  }
       
//      }
      
    
//      fetch('../send-price.php')
//      .then(res=>res.json())
//      .then(data=>{
    
//        if(arrData.length==1||arrData.length==0){
         
//         priceNum.innerText=`Введіть день заїзду і день виїзду`;
//        } else{
//           if(6<=month&&month<=8){
//             console.log(month)
//             if(localStorage.getItem('room')=='двохмісний'){
              
//               priceNum.innerText=`Ціна всього:   ${Number(data['summer_price'])*(arrData.length-1)*1} грн`
  
//             } else{
//             console.log(1121212121)
//               priceNum.innerText=`Ціна всього:   ${Number(data['summer_price'])*(arrData.length-1)*String(localStorage.getItem('room'))[0]} грн`
//             }
//           } else{
//             if(localStorage.getItem('room')=='двохмісний'){
//               priceNum.innerText=`Ціна всього:   ${Number(data['winter_price'])*(arrData.length-1)*1} грн`
  
//             } else{
//               priceNum.innerText=`Ціна всього:   ${Number(data['winter_price'])*(arrData.length-1)*String(localStorage.getItem('room'))[0]} грн`
//             }
//           }
//        }
       
       
//      })
     
    
//   }
  
//   if(e.target.classList.contains('next')){
//     const activeBtns = document.querySelectorAll('.booking-btn-active')
//     nextClicked = 1;
//     prevClicked = '';
    
//     if(localStorage.getItem('nextdate')){
//       next = 1;
//     } else{
//       next = 0;
//     }
//     if(month>=12){
//       month = 1;
//       year = ++year;
//     } else{
//       month = ++month;
   
//   }
//   bookedRooms(localStorage.getItem('room'))
//    daysOnLoad = daysInMonth(month, year);
//    renderBookingTable(daysOnLoad); 
   
//    if(localStorage.getItem('min')){
//     if(arrData.length>=1){
//        clicked = 'yes';
//      dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)}-${localStorage.getItem(`max`)} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}</p>`
//     } 
//     if(arrData.length==1){
//      dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
//     }
//     if(localStorage.getItem('nextdate')&&clicked=='yes'){
//     dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
    
//    }
//    } else{
//     if(arrData.length>=1){
//       clicked = 'yes';
//      dateNameBlock.innerHTML = `<p>${localStorage.getItem('nextdate')} </p>`
//     } 
//     if(arrData.length==1){
//      dateNameBlock.innerHTML = `<p>${String(localStorage.getItem('nextdate')).slice(0,2)} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
//     }
//   //   if(localStorage.getItem('nextdate')&&!cliked){
 
//   //   dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
    
//   //  }
//    }
   
   
   
//  }

//  if(e.target.classList.contains('prev')){
//   nextClicked = ''; 
//   prevClicked = 1;
//   // const reserves = document.querySelectorAll('.reserve-active')
//    if(data>=now){
//       if(month<=1){
//         month=12;
//         year = --year;
//       } else{
//       month = --month;
//     }
//    }
//   bookedRooms(localStorage.getItem('room'))
//   //  reserveActive.forEach(item=>{
//   //   console.log(e.target.getAttribute('name'))
//   //   if(e.target.getAttribute('name')=='yes'){
//   //      item.classList.add('booking-btn-active')
//   //   }
//   // })
  
  
//    daysOnLoad = daysInMonth(month, year);
//    renderBookingTable(daysOnLoad);  
//    const activeBtns = document.querySelectorAll('.booking-btn-active')
//   if(activeBtns.length>1){
//     dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent}-${activeBtns[activeBtns.length-1].textContent} ${writeZero(month)} ${year}</p>`
//   }
//   if(activeBtns.length==1){
//     dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent} ${writeZero(month)} ${year}</p>`

//   }
//   if(localStorage.getItem('nextdate')){
//     clicked = 'yes';
//     dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
//   }
  

//   if(!noSet&&activeBtns.length==0&&!localStorage.getItem('nextdate')){
//     dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)}-${localStorage.getItem(`max`)} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}</p>`
//   }
//   if(arrData.length==0){
//     dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
//   }
//   // if(activeBtns.length==0){
//   //   dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent} ${writeZero(month)} ${year}</p>`

//   // }
//   ''
// }
// // console.log(arrData) 
//   if(e.target.classList.contains('order')){
//      //e.preventDefault()
//     const numOfRoom = document.querySelector('select[name="rooms"]').value;
//     const orderForm = document.querySelector('.black')
//     const formdata = new FormData()
//     // console.log(arrData) 
//     formdata.set('arr', arrData)
//     formdata.set('num_of_room', numOfRoom)
    
//     fetch('../test.php' , {
//       method : 'post' ,
//       body : formdata
           
      
//   })
//   // window.location.href='test.php';

//   }
//   if(e.target.classList.contains('update')){
//     //e.preventDefault()
//    const numOfRoom = document.querySelector('select[name="rooms"]').value;
//    const orderForm = document.querySelector('.black')
//    const formdata = new FormData()
//    // console.log(arrData) 
//    formdata.set('arr', arrData)
//    formdata.set('num_of_room', numOfRoom.trim(' '))
   
//    fetch('../test.php' , {
//      method : 'post' ,
//      body : formdata
          
     
//  })
//  // window.location.href='test.php';

//  }
// })
// renderBookingTable(daysOnLoad)












$(window).on("load", function(){
  $('#header').vide('video/vzh',{
   
  })
  });
    localStorage.clear();
  const now = new Date();
  const day = now.getDate();
  const newMonth = now.getMonth()+1;
  const newYear = now.getFullYear();
  let month = now.getMonth()+1;
  let year = now.getFullYear();
  let firstDate;
  let secondDate;
  let active = [];
  function bookedRooms(value){
   if(value!=0){
     fetch(`../test.php?numOfRoom=${value}`)
     .then(response=>response.json())
     .then(data=>{
       data.forEach(date=>{
         const arr = date.split(',')
         
         const reserves = document.querySelectorAll('.reserve-active')
         arr.forEach(el=>{
           reserves.forEach(reserve=>{
             
             if(reserve.getAttribute('date')==el){
               reserve.classList.add('date-booked')
             }
       })
         
         
           })
         })
          
     })
   }
  }
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
    }
    if(e.target.classList.contains("register-user-button")){
     document.querySelector('.form-user-popap').classList.add("form-user-popap-active")
    }
    if(e.target.classList.contains("register-close")){
     document.querySelector('.form-user-popap').classList.remove("form-user-popap-active")
    }
    if(e.target.classList.contains("fa-times")){
     document.querySelector('.form-popap').classList.remove("form-popap-active")
    }
    if(e.target.classList.contains("login-close")){
     document.querySelector('.form-user-login-popap').classList.remove("form-user-login-popap-active")
    }
   if(e.target.classList.contains("form-popap")){
    document.querySelector('.form-popap').classList.remove("form-popap-active")
   }
  } )
 const burgerMenu = document.querySelector('.fa-bars'),
       registerButtons = document.querySelector('.register_buttons');
 
 burgerMenu.addEventListener('click', ()=>{
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
 const writeZero = (num)=>{
      if(num<10){
        return `0${num}`
      } else{
        return num
      }
 }
 const daysInMonth = (month, year) => {
   return new Date(year, month, 0).getDate();
 }
 let daysOnLoad = daysInMonth(month, year);
 
 
 
 
 
 const filterRooms = (arr, people, elem)=> {
      elem.innerHTML = '<option value="0">Доступні номера</option>';
      const newArr = arr.filter(({numOfPeople})=>numOfPeople==people)
      if(newArr.length>0){
        newArr.forEach(item=>{
           const wrapper = document.createElement('option')
           // wrapper.setAttribute('value', item.numOfRoom)
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
      if(target.classList.contains('rooms')){
       const bookingTable = document.querySelector('.booking-table');
       bookingTable.style.display = 'block';
       const value = target.value;
       
        bookedRooms(value)
       localStorage.setItem('room', value)
       
      }
      if(target.classList.contains('rooms-select')){
 
        const value = target.value;
 
        const wrapper = document.querySelector('select[name="rooms"]')
        filterRooms(rooms, value, wrapper)
        
      }
      
      
 
 })
 let reserveActive;
 let allLocalKeys = [];
 const dateNameBlock = document.querySelector('.data-number');
 let arrData = [];
 const renderBookingTable=(days)=>{
   const wrapper = document.querySelector('.booking-table-content');
   const activeBtns = document.querySelectorAll('.booking-btn-active')
   dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
   wrapper.innerHTML='';
   
   for(let i = 1; i<=days; i++){
      const div = document.createElement('div');
      div.classList.add('booking-table-day');
      div.innerText = i;
     
       if(year==newYear && month==newMonth && i<=day){
         div.style.backgroundColor='red';
       } else{
         
         div.classList.add('reserve-active')
         div.setAttribute('date', new Date(year, month-1, i))
         
       }
       
       
      wrapper.append(div);
     
   }
   
     const reserveActiveBtns = document.querySelectorAll('.reserve-active')
         reserveActiveBtns.forEach(item=>{
           if(item.textContent==localStorage.getItem(`id${item.getAttribute('date')}`)){
             item.classList.add('booking-btn-active')
             item.setAttribute('date', new Date(year, month-1, item.textContent))
             // arrData.push(item.getAttribute('date'))
             // console.log(arrData)
           }
         })
 
   
   
 }
 let counter;
 let min;
 let localKeys;
 let globalDate;
 let clicked;
 let nextMonth;
 let maxDay;
 let equal;
 let minDay;
 let normal;
 let next;
 let noSet;
 let nextClicked;
 let prevClicked;
 let lastKey;
 let twoMonth;
 localStorage.setItem('dateArr' , JSON.stringify([]));
 
 const setDate = (btn)=>{
           allLocalKeys.push(btn.textContent)
         btn.classList.add('booking-btn-active')
         localStorage.setItem(`id${btn.getAttribute('date')}`, btn.textContent)
         arrData.push(btn.getAttribute('date'))
 }
 
 const getDate = (date) => {
     const day = new Date(date).getDate();
     const month = new Date(date).getMonth() + 1;
     const year = new Date(date).getFullYear();
     const innerDate = `${day}-${month}-${year}`;
     return innerDate;
 }
 
 const tableDateInfo = (btn) => {
     let dateArr = JSON.parse(localStorage.getItem('dateArr'));
     const day = 86400000;
     const date = btn.getAttribute('date');
     const parsedDate = Date.parse(date);
     let firstDate;
     let secondDate;
     if(dateArr.length === 0){
         dateArr.push(parsedDate);
         setDate(btn)
         firstDate = getDate(parsedDate);
     } else if (dateArr.length === 1) {
       console.log(dateArr[0] - parsedDate)
         if(dateArr[0] !== parsedDate){
             if(dateArr[0] > parsedDate && (dateArr[0] - parsedDate === day || dateArr[0] - parsedDate===90000000) ){
                 setDate(btn)
                 dateArr.unshift(parsedDate);
             } else if (dateArr[0] < parsedDate && (dateArr[0] - parsedDate === -day || dateArr[0] - parsedDate===-90000000)) {
                 setDate(btn)
                 dateArr.push(parsedDate);
             }
             firstDate = getDate(dateArr[0]);
             secondDate = getDate(dateArr[1]);
         } else {
             btn.classList.remove('booking-btn-active')
             localStorage.removeItem(`id${btn.getAttribute('date')}`, btn.textContent)
             dateArr = [];
         }
     } else if(dateArr.length === 2) {
       console.log(parsedDate-90000000, dateArr[0])
         if(dateArr.every(el => el !== parsedDate)){
             if(dateArr[0] > parsedDate && (dateArr[0] - parsedDate === day || dateArr[0] - parsedDate===90000000)){
                 setDate(btn)
                 dateArr[0] = parsedDate;
                 btn.classList.add('booking-btn-active')
             }
             if(dateArr[1] < parsedDate && (dateArr[1] - parsedDate === -day || dateArr[1] - parsedDate===-90000000)){
                 setDate(btn)
                 btn.classList.add('booking-btn-active')
                 dateArr[1] = parsedDate;
             }
             firstDate = getDate(dateArr[0]);
             secondDate = getDate(dateArr[1]);
         } else {
           console.log('nooo')
           btn.classList.remove('booking-btn-active')
           localStorage.removeItem(`id${btn.getAttribute('date')}`, btn.textContent)
           
             if(dateArr[1] - dateArr[0] === day||dateArr[1] - dateArr[0] === 90000000){
                 
                 dateArr = dateArr.filter(el => el !== parsedDate);
             } else {
                 if(dateArr[0] === parsedDate){
                      const maxDate = Date.parse(new Date(year, month-1, daysOnLoad))
                      console.log(maxDate, dateArr[0] + day)
                      if(dateArr[0] + day>maxDate){
                        dateArr[0] = dateArr[0] + 90000000;
                     } else{
                         dateArr[0] = dateArr[0] + day;
                     }
                
                     
                 }
                 if(dateArr[1] === parsedDate){
                  const minDate = Date.parse(new Date(year, month-1, 1))
                  if(dateArr[1] - day < minDate){
                    dateArr[1] = dateArr[1] - 90000000;
                  } else{
                    dateArr[1] = dateArr[1] - day;
                  }
                    
                  
                     
                 }
                //  console.log(Date.parse(new Date(1,10,2021))-Date.parse(new Date(31, 11, 2021)))
                 firstDate = getDate(dateArr[0]);
                 secondDate = getDate(dateArr[1]);
console.log(firstDate)
          
             }
         }
     }
    //  console.log(twoMonth)
     localStorage.setItem('dateArr' , JSON.stringify(dateArr));
 
 }
 
//  const controlCount = ()=>{
   
//    if(clicked=='yes'&&nextClicked){
//      console.log('no')
//      noSet = 1;
//    } else{
//      noSet = '';
//    }
  
//  }
//  const actionDay = (elem, day, action)=>{
   
//    if(month>newMonth&&year>=newYear&&clicked=='yes'&&!equal){
//      if(action=='+'){
//        if(elem.textContent==day+1){
//          elem.classList.remove('booking-btn-active')
 
 
//        }
//      } else{
//        if(elem.textContent==day-1){
//          elem.classList.remove('booking-btn-active')
//        }
//      }
     
//    } else{
//      if(action=='+'){
//        maxDay = ++day;
//      } else{
//        minDay = --day;
//      }  
     
//      allLocalKeys.push(elem.textContent)
//      // console.log(allLocalKeys)
//      localStorage.setItem(`id${elem.getAttribute('date')}`, elem.textContent)
//      elem.classList.add('booking-btn-active')
//      arrData.push(elem.getAttribute('date'))
//    }
//  }
//  const reserveActionDay = (elem, day, action)=>{
   
//      if(action=='+'){
//        maxDay = --day;
//      } else{
//        minDay = ++day;
//      }
     
//      elem.classList.remove('booking-btn-active')
//      arrData  = arrData.filter(item=>elem.getAttribute('date')!=item)
//      localStorage.removeItem(`id${elem.getAttribute('date')}`)
//      allLocalKeys.forEach((item, key)=>{
//        if(item==elem.textContent){
//          allLocalKeys = allLocalKeys.filter(item=>{
//              if(item!=elem.textContent){
//                return item;
//              }
//           })
//        }
//      })
//      // console.log(allLocalKeys)
   
//  }
 document.addEventListener('click', (e)=>{
   
   const data = new Date(year, month - 1)
   
  //  if(e.target.classList.contains('booking-btn-active')){
     
  //    if(Number(e.target.textContent)==maxDay){
  //     //  reserveActionDay(e.target, maxDay, '+')
  //    }
  //    if(Number(e.target.textContent)==minDay){
  //     //  reserveActionDay(e.target, minDay, '-')
  //    }
  //    const activeBtns = document.querySelectorAll('.booking-btn-active')
  //    if(activeBtns.length==0&&!equal){
  //      maxDay = '';
  //      minDay = '';
  //    }
    
    
     
  //    if(localStorage.getItem('nextdate')){
  //      localStorage.setItem('clicked_month', String(localStorage.getItem('nextdate')).slice(0,1))
  //      // localStorage.setItem('clicked_year', localStorage.getItem('nextdate'))
  //    }
  //    if(arrData.length==0){
  //      localStorage.removeItem('clicked_month')
  //      localStorage.removeItem('clicked_year')
  //    }
      
     
     
  //    console.log(noSet)
  //    if(!noSet){
  //      min = Math.min(...allLocalKeys)
  //      max = Math.max(...allLocalKeys)
  //      localStorage.setItem(`min`, min)
  //      localStorage.setItem(`max`, max)
  //    }
       
       
  //     counter = 1;
  //  } else{
  //    counter = 0;
  //  }
   
   if(e.target.classList.contains('reserve-active')){
 
       tableDateInfo(e.target)
 
    //    if(counter==0){
    //      if(!maxDay&&!minDay){
    //          setDate(e.target);
    //          arrData.push(e.target.getAttribute('date'))
    //          maxDay = Number(e.target.textContent);
    //          minDay = Number(e.target.textContent);
    //      }
    //     let days = daysInMonth(month-1, year);
    //      if(maxDay==days&&Number(e.target.textContent)==1){
    //        equal='yes';
    //        // allLocalKeys.push(e.target.textContent)
    //        // e.target.classList.add('booking-btn-active')
    //       //  controlCount()
           
    //        setDate(e.target);
    //        arrData.push(e.target.getAttribute('date'))
    //        const actives = document.querySelectorAll('.booking-btn-active')
    //        maxDay = Number(actives[actives.length-1].textContent);
    //        // localStorage.setItem(`id${e.target.getAttribute('date')}`, e.target.textContent)
    //      // } else{
           
    //      //     if(!equal){
    //      //       console.log('no equal')
    //      //       maxDay = maxDay + 1;
    //      //       console.log(maxDay)
    //      //     } 
             
            
    //      }
         
    //      if(maxDay+1==e.target.textContent){
           
    //       //  controlCount()
    //        normal = 'ok';
    //       //  actionDay(e.target, maxDay, '+')
               
           
    //      } else{
    //        normal = '';
    //      }
    //      if(minDay-1==e.target.textContent){
    //       //  controlCount()
    //        normal = 'ok';
    //       //  actionDay(e.target, minDay, '-')
           
    //      } else{
    //        normal = '';
    //      }
         
    //  }
     const activeBtns = document.querySelectorAll('.booking-btn-active')
     dateNameBlock.innerHTML = `<p>${writeZero(e.target.textContent)} ${writeZero(month)} ${year}</p>`
     // if(counter==0){
     //   arrData.push(e.target.getAttribute('date'))
       
     // }
     
    //    if(counter==0){
    //      if(arrData.length==1&&!noSet){
    //        localStorage.setItem('clicked_month', month)
    //        localStorage.setItem('clicked_year', year)
    //      }
 
    //      if(!noSet){
    //        console.log(noSet)
    //        min = Math.min(...allLocalKeys)
    //        max = Math.max(...allLocalKeys)
    //        localStorage.setItem(`min`, min)
    //        localStorage.setItem(`max`, max)
    //      } 
         
    //  } else{
    //    if(arrData.length==0){
    //      localStorage.removeItem(`min`)
    //      localStorage.removeItem(`max`)
         
    //      dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
    //    }
    //    if(activeBtns.length==0&&next==1){
    //      console.log(123)
    //      localStorage.removeItem('nextdate')
    //      localStorage.removeItem('nextmaxdate')
         
    //    }
    //    if(activeBtns.length==0&&next!=1){
    //      lastKey = 1;
    //      noSet = '';
    //      localStorage.removeItem('max')
    //      localStorage.removeItem('min')
    //    }
    //  }
      
     
     
     //  if(activeBtns.length==0&&localStorage.length==0){
     //   dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
     // }
    //  if(activeBtns.length>1){
    //    console.log(1)
    //    dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent}-${activeBtns[activeBtns.length-1].textContent} ${writeZero(month)} ${year}</p>`
    //   } 
    //   if(prevClicked&&localStorage.getItem('nextdate')){
    //    dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
    //   }
    //   if(month==newMonth&&year==newYear){
        
    //     if(arrData.length==1){
    //      dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent} ${writeZero(month)} ${year}</p>`
 
    //     }
    //     if(localStorage.getItem('nextdate')&&activeBtns.length==0){
 
    //      dateNameBlock.innerHTML = `<p>${localStorage.getItem('nextdate')}</p>`
    //       //
    //     }
    //   }
    //   if(month>newMonth&&year>=newYear&&clicked=='yes'){
    //    const activeBtns = document.querySelectorAll('.booking-btn-active')
        
    //    if(activeBtns.length!=0){
         
    //      dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))}  ${writeZero(newMonth)} ${newYear} - ${writeZero(activeBtns[activeBtns.length-1].textContent)} ${writeZero(month)} ${year}</p>`
    //      localStorage.setItem('nextdate', `${writeZero(activeBtns[0].textContent)} - ${writeZero(activeBtns[activeBtns.length-1].textContent)} ${writeZero(month)} ${year}`)      // if(activeBtns.length>1&&localStorage.length==0){
    //      localStorage.setItem('nextmaxdate', `${writeZero(activeBtns[activeBtns.length-1].textContent)} ${writeZero(month)} ${year}`)      // if(activeBtns.length>1&&localStorage.length==0){
 
    //    } else{
    //       if(normal=='yes'){
 
    //        dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))} - ${writeZero(localStorage.getItem(`max`))} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
    //       } 
    //       else{
    //         if(arrData.length>1){
    //          dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))} - ${writeZero(localStorage.getItem(`max`))} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
 
    //         } else{
    //          dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))}  ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
 
    //         }
            
    //        }
 
    //    }
       //   dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent}-${activeBtns[activeBtns.length-1].textContent} ${writeZero(month)} ${year}</p>`
       //  } else{
       //   dateNameBlock.innerHTML = `<p>${localStorage.getItem('min')} ${writeZero(newMonth)} ${newYear}-${activeBtns[activeBtns.length-1]} ${writeZero(month)} ${year}</p>`
       //  }
        
  //     }
       
     
     
     
     
    }
   if(e.target.classList.contains('next')){
     const activeBtns = document.querySelectorAll('.booking-btn-active')
     nextClicked = 1;
     prevClicked = '';
     
     if(localStorage.getItem('nextdate')){
       next = 1;
     } else{
       next = 0;
     }
     if(month>=12){
       month = 1;
       year = ++year;
     } else{
       month = ++month;
    
   }
   bookedRooms(localStorage.getItem('room'))
    daysOnLoad = daysInMonth(month, year);
    renderBookingTable(daysOnLoad); 
    
    if(localStorage.getItem('min')){
     if(arrData.length>=1){
        clicked = 'yes';
      dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)}-${localStorage.getItem(`max`)} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}</p>`
     } 
     if(arrData.length==1){
      dateNameBlock.innerHTML = `<p>${writeZero(localStorage.getItem(`min`))} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
     }
     if(localStorage.getItem('nextdate')&&clicked=='yes'){
     dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
     
    }
    } else{
     if(arrData.length>=1){
       clicked = 'yes';
      dateNameBlock.innerHTML = `<p>${localStorage.getItem('nextdate')} </p>`
     } 
     if(arrData.length==1){
      dateNameBlock.innerHTML = `<p>${String(localStorage.getItem('nextdate')).slice(0,2)} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}`
     }
   //   if(localStorage.getItem('nextdate')&&!cliked){
  
   //   dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
     
   //  }
    }
    
    
    
  }
 
  if(e.target.classList.contains('prev')){
   nextClicked = ''; 
   prevClicked = 1;
   // const reserves = document.querySelectorAll('.reserve-active')
    if(data>=now){
       if(month<=1){
         month=12;
         year = --year;
       } else{
       month = --month;
     }
    }
   bookedRooms(localStorage.getItem('room'))
   //  reserveActive.forEach(item=>{
   //   console.log(e.target.getAttribute('name'))
   //   if(e.target.getAttribute('name')=='yes'){
   //      item.classList.add('booking-btn-active')
   //   }
   // })
   
   
    daysOnLoad = daysInMonth(month, year);
    renderBookingTable(daysOnLoad);  
    const activeBtns = document.querySelectorAll('.booking-btn-active')
   if(activeBtns.length>1){
     dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent}-${activeBtns[activeBtns.length-1].textContent} ${writeZero(month)} ${year}</p>`
   }
   if(activeBtns.length==1){
     dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent} ${writeZero(month)} ${year}</p>`
 
   }
   if(localStorage.getItem('nextdate')){
     clicked = 'yes';
     dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)} ${writeZero(localStorage.getItem('clicked_month'))} ${localStorage.getItem('clicked_year')} - ${localStorage.getItem('nextmaxdate')}</p>`
   }
   
 
   if(!noSet&&activeBtns.length==0&&!localStorage.getItem('nextdate')){
     dateNameBlock.innerHTML = `<p>${localStorage.getItem(`min`)}-${localStorage.getItem(`max`)} ${writeZero(localStorage.getItem('clicked_month'))} ${writeZero(localStorage.getItem('clicked_year'))}</p>`
   }
   if(arrData.length==0){
     dateNameBlock.innerHTML = `<p>${writeZero(month)} ${year}</p>`
   }
   // if(activeBtns.length==0){
   //   dateNameBlock.innerHTML = `<p>${activeBtns[0].textContent} ${writeZero(month)} ${year}</p>`
 
   // }
   ''
 }
 // console.log(arrData) 
   if(e.target.classList.contains('order')){
      //e.preventDefault()
     const numOfRoom = document.querySelector('select[name="rooms"]').value;
     const orderForm = document.querySelector('.black')
     const formdata = new FormData()
     // console.log(arrData) 
     formdata.set('arr', arrData)
     formdata.set('num_of_room', numOfRoom)
     
     fetch('../test.php' , {
       method : 'post' ,
       body : formdata
            
       
   })
   // window.location.href='test.php';
 
   }
 })
 renderBookingTable(daysOnLoad)
 
 
 
 