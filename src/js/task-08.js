const form = document.querySelector(".login-form");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    
    if(form.elements.email.value === '' || form.elements.password.value === '') {alert("все поля должны быть заполнены");}
    console.log({email:form.elements.email.value, password:form.elements.password.value,});
    
    form.reset();
});

