(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),l=(i(16),i(11)),s=i(2),c=i(1),r=(i(17),i(3)),o=(i(18),i(19),i(0)),d=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:n,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,Object(r.a)({},e),e.imdbId)}))})},b=i(5),j=i(6),u=i.n(j),h=(i(21),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;switch(t){case"imgUrl":case"imdbUrl":return!i.test(e);default:return""===e}}),p="Invalid value",v=function(e){var t=e.addMovie,i=Object(c.useState)(""),a=Object(s.a)(i,2),n=a[0],l=a[1],d=Object(c.useState)(""),m=Object(s.a)(d,2),j=m[0],v=m[1],g=Object(c.useState)(""),O=Object(s.a)(g,2),f=O[0],I=O[1],w=Object(c.useState)(""),x=Object(s.a)(w,2),M=x[0],N=x[1],U=Object(c.useState)(""),_=Object(s.a)(U,2),T=_[0],y=_[1],B=Object(c.useState)({isTitleInvalid:!1,isDescriptionInvalid:!1,isImgUrlInvalid:!1,isImdbUrlInvalid:!1,isImdbIdInvalid:!1}),z=Object(s.a)(B,2),k=z[0],C=z[1],S=function(e,t,i){C(Object(r.a)(Object(r.a)({},k),{},Object(b.a)({},e,h(t,i))))},A=function(e,t,i){var a=e.target.value;C(Object(r.a)(Object(r.a)({},k),{},Object(b.a)({},t,h(a,i))))},D=k.isTitleInvalid,V=k.isImgUrlInvalid,Y=k.isImdbUrlInvalid,Z=k.isImdbIdInvalid;return Object(o.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),Object.values(k).every((function(e){return!e})))&&(t({title:n,description:j,imgUrl:f,imdbUrl:M,imdbId:T}),l(""),v(""),I(""),N(""),y(""))},className:"form",children:[Object(o.jsx)("input",{type:"text",name:"title",value:n,onChange:function(e){l(e.target.value),A(e,"isTitleInvalid","title")},onBlur:function(){return S("isTitleInvalid",n,"title")},className:u()("form__input",{invalid:D}),placeholder:"title",autoComplete:"off"}),Object(o.jsx)("p",{className:"error",children:D&&p}),Object(o.jsx)("input",{type:"text",name:"description",value:j,className:"form__input",onChange:function(e){return v(e.target.value)},placeholder:"description",autoComplete:"off"}),Object(o.jsx)("input",{type:"text",name:"imgUrl",value:f,onChange:function(e){I(e.target.value),A(e,"isImgUrlInvalid","imgUrl")},onBlur:function(){return S("isImgUrlInvalid",f,"imgUrl")},className:u()("form__input",{invalid:V}),placeholder:"img url",autoComplete:"off"}),Object(o.jsx)("p",{className:"error",children:V&&p}),Object(o.jsx)("input",{type:"text",name:"imdbUrl",value:M,onChange:function(e){N(e.target.value),A(e,"isImdbUrlInvalid","imdbUrl")},onBlur:function(){return S("isImdbUrlInvalid",M,"imdbUrl")},className:u()("form__input",{invalid:Y}),placeholder:"imdb url",autoComplete:"off"}),Object(o.jsx)("p",{className:"error",children:Y&&p}),Object(o.jsx)("input",{type:"text",name:"imdbId",value:T,onChange:function(e){y(e.target.value),A(e,"isImdbIdInvalid","imdbId")},onBlur:function(){return S("isImdbIdInvalid",T,"imdbId")},className:u()("form__input",{invalid:Z}),placeholder:"imdb id",autoComplete:"off"}),Object(o.jsx)("p",{className:"error",children:Z&&p}),Object(o.jsx)("button",{type:"submit",children:"Add movie"})]})},g=i(10),O=function(){var e=Object(c.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(v,{addMovie:function(e){a([].concat(Object(l.a)(i),[e]))}})})]})};n.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.dd502bef.chunk.js.map