let process = document.querySelector('.process');
let process_bar = document.querySelector('.process-bar');

window.addEventListener('scroll',()=>{
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop
    const Percentage = (scrollTop/pageHeight)*100
    if(Percentage==0){
            process_bar.style.visibility="hidden"
    }else{

        process_bar.style.visibility="visible"
    }
    process.style.width=Percentage+"%"
})