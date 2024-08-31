let tittle=document.getElementById('title')
let price=document.getElementById('price')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let descount=document.getElementById('des')
let total=document.getElementById('total')
let cont=document.getElementById('count')
let category=document.getElementById('gat')
let submit=document.getElementById('submit')
let search=document.getElementById('serch')

let mood ='create';

let tmp;


function gettotal(){
if(price.value!=''){
    let result =(+price.value+ +taxes.value+ +ads.value)-+descount.value;
    total.innerHTML=result;
total.style.background="green"

}else{
    total.innerHTML='';
    total.style.background="red"
}
}
let datapro;
if(localStorage.product!= null){
    datapro =JSON.parse(localStorage.product)
}else{
    datapro=[];
}




submit.onclick = function(){
    let newpro={
tittle:tittle.value.toLowerCase(),
price:price.value,
taxes:taxes.value,
ads:ads.value,
descount:descount.value,
total:total.innerHTML,
cont:cont.value,
category:category.value.toLowerCase(),
}
if(tittle.value!="" && price.value!="" && category.value!=""&&newpro.cont<100)  
     {

    if(mood === 'create'){
    
        if(newpro.cont>1){
            for(let i =0 ; i<newpro.cont;i++){
                  datapro.push(newpro);
            } 
           
        } else{
            datapro.push(newpro)
        }
    }else{
        datapro[ tmp   ] =newpro;
        mood ='create'
        submit.innerHTML='cereate'
        cont.style.display='block'
    }
    cleardata()
}
  //save localstorag//
  localStorage.setItem('product' , JSON.stringify(datapro));
 
  cleardata()
  showdata()
}


              //clere//
function cleardata() {

tittle.value='',
price.value='',
taxes.value='',
ads.value='',
descount.value='',
total.innerHTML='',
category.value='',
cont.value='';
}
     //creat//
function showdata()
{
gettotal()
let table='';
for(let i=0 ;i<datapro.length;i++){
    table +=
    ` <tr>
  <td>${[i+1]}</td>
  <td>${datapro[i].tittle}</td>
  <td>${datapro[i].price}</td>
  <td>${datapro[i].taxes}</td>
  <td>${datapro[i].ads}</td>
  <td>${datapro[i].descount}</td>
  <td>${datapro[i].total}</td>
  <td>${datapro[i].category}</td>
  <td>
  <button onclick="updatadata(${i})" type="button">update</button>
  </td>
  <td>
  <button onclick="deletedata(${i})" type="button">delete</button>
  </td>
</tr>
`

}


document.getElementById('tbody').innerHTML=table;

let btndelete =document.getElementById('deleteAll');
if(datapro.length>0){
btndelete.innerHTML=
`
  <button onclick="deleteall()"   type="button">delete All (${datapro.length})</button>

`
}else{
    btndelete.innerHTML='';
}


}
showdata()
 
                //delete data//
 
 function deletedata(i){
  
  datapro.splice(i,1);
localStorage.product=JSON.stringify(datapro)
  
showdata()

 }

 function deleteall(){
   
    localStorage.clear(),
    datapro.splice(0);
    showdata()

 }

  function updatadata(i){
    tittle.value=datapro[i].tittle
    price.value=datapro[i].price
    taxes.value=datapro[i].taxes
    ads.value=datapro[i].ads
    descount.value=datapro[i].descount
    cont.style.display='none'
    category.value=datapro[i].category
    gettotal()
submit.innerHTML='Update'
mood='update'
tmp=i;

scroll({
    top:0,
behavior:"smooth",
})


  } 
 
  //searck/
let searchmood="tittle";



function getsearchmood(id){

    let search=document.getElementById('search');


if (id=='searchTitlle'){
    searchmood='title'
  
}else{
    searchmood='category'
      
}
search.placeholder ="search by "+searchmood;

search.focus()
search.value='';
showdata()

}
function searchdata(value){
    let table='';
if (searchmood=='title')

    {
    for(let i=0 ;i<datapro.length;i++){
                if(datapro[i].tittle.includes(value)){
                    table +=
              ` <tr>
            <td>${[i]}</td>
            <td>${datapro[i].tittle}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].descount}</td>
            <td>${datapro[i].cont}</td>
            <td>${datapro[i].category}</td>
            <td>
            <button onclick="updatadata(${i})" type="button">update</button>
            </td>
            <td>
            <button onclick="deletedata(${i})" type="button">delete</button>
            </td>
          </tr>
`

        }
    }
   
}
    else
    for(let i=0 ;i<datapro.length;i++){
        if(datapro[i].category.includes(value.toLowerCase()))

            {

            table +=
      ` <tr>
    <td>${[i]}</td>
    <td>${datapro[i].tittle}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].descount}</td>
    <td>${datapro[i].cont}</td>
    <td>${datapro[i].category}</td>
    <td>
    <button onclick="updatadata(${i})" type="button">update</button>
    </td>
    <td>
    <button onclick="deletedata(${i})" type="button">delete</button>
    </td>
  </tr>
`

}

}
  {

         }

         document.getElementById('tbody').innerHTML=table;

}
                              
 
                              
                            


                



                                








