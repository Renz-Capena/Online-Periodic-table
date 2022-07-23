let box = document.querySelectorAll('.box');
let element_form = document.querySelector('.element_form');
let element_wrapper = element_form.querySelector('.element_wrapper');
let element_description = document.querySelector('.element_description');
let element_other_info = document.querySelector('.element_other_info');
let close_btn = document.querySelector('.close_btn');



close_btn.addEventListener('click',()=>{
    element_form.style.transform = 'scale(0)';
    element_form.style.zIndex = '-1';
})


box.forEach( box_1 =>{
    box_1.addEventListener('click',()=>{

        element_form.style.transform = 'scale(1)';
        element_form.style.zIndex = '2';

        setTimeout(()=>{
            element_form.style.transform = 'scale(0)';
            element_form.style.zIndex = '-1';
        },10000)






        let User_click_element = box_1.querySelector('.box_letter').innerText;

        switch(User_click_element){
            case'H':
                element_wrapper.innerHTML = "<p>1</p><p>H</p><p>Hydrogen</p>"

                element_description.innerText = "Hydrogen is the chemical element with the symbol H and atomic number 1. Hydrogen is the lightest element."

                element_other_info.innerHTML = "<p>Atomic mass:1.0078 u</p><br><p>Melting point:-259.16°C (13.99 K)</p><br><p>Boiling point:-252.87°C (20.28 K)</p><br><p>Discovery date:1766</p><br><p>Discovered by:Henry Cavendish</p>"
                break;
            
            case'Li':
                element_wrapper.innerHTML = "<p>3</p><p>Li</p><p>Lithium</p>"

                element_description.innerText = "Lithium is a chemical element with the symbol Li and atomic number 3. It is a soft, silvery-white alkali metal."

                element_other_info.innerHTML = "                    <p>Atomic mass:6.9410 u</p>                     <br>                                                <p>Melting point:180.54°C (453.69 K)</p>        <br>                                                <p>Boiling point:1342°C (1615.15 K)</p>        <br>                                                <p>Discovery date:1817</p>                               <br>                                            <p>Discovered by:Johan August Arfwedson</p>"
                break;

            case'Be':
                element_wrapper.innerHTML = "<p>4</p><p>Be</p><p>Beryllium</p>"

                element_description.innerText = "Beryllium is a chemical element with the symbol Be and atomic number 4. It is a steel-gray, strong, lightweight and brittle alkaline earth metal."

                element_other_info.innerHTML = "                    <p>Atomic mass:9.0122 u</p>                     <br>                                                <p>Melting point:1286.85°C (1560 K)</p>        <br>                                                <p>Boiling point:2469°C (2742.15 K)</p>        <br>                                                <p>Discovery date:1797</p>                               <br>                                            <p>Discovered by: <br>Louis Nicolas Vauquelin, Martin Heinrich Klaproth</p>"
                break;

            case'Na':
                element_wrapper.innerHTML = "<p>11</p><p>Na</p><p>Sodium</p>"

                element_description.innerText = "Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal."

                element_other_info.innerHTML = "                    <p>Atomic mass:22.990 u</p>                     <br>                                                <p>Melting point:97.79°C (370.94 K)</p>        <br>                                                <p>Boiling point:882.85°C (1156 K)</p>        <br>                                                <p>Discovery date:1807</p>                               <br>                                            <p>Discovered by:Humphry Davy"
                break;

            case'Mg':
                element_wrapper.innerHTML = "<p>11</p><p>Mg</p><p>Magnesium</p>"

                element_description.innerText = "Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray solid which shares many physical and chemical properties with the other five alkaline earth metals (group 2 of the periodic table)."

                element_other_info.innerHTML = "                    <p>Atomic mass:24.305 u</p>                     <br>                                                <p>Melting point:650°C (923.15 K)</p>        <br>                                                <p>Boiling point:1091°C (1364.15 K)</p>        <br>                                                <p>Discovery date:1755</p>                               <br>                                            <p>Discovered by:Humphry Davy, Joseph Black"
                break;


            default:
                alert('Something Wrong!!');
                break;
        }
    })
})