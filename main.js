let box = document.querySelectorAll('.box');
let element_form = document.querySelector('.element_form');
let element_wrapper = element_form.querySelector('.element_wrapper');
let element_description = document.querySelector('.element_description');
let element_other_info = document.querySelector('.element_other_info');
let close_btn = document.querySelector('.close_btn');



close_btn.addEventListener('click',()=>{
    element_form.style.transform = 'scale(0)';
    element_form.style.zIndex = '-1';
    // element_wrapper.innerHTML = "";
    // element_description.innerText = "";
    // element_other_info.innerHTML = "";
})


box.forEach( box_1 =>{
    box_1.addEventListener('click',()=>{

        element_form.style.transform = 'scale(1)';
        element_form.style.zIndex = '2';

        // setTimeout(()=>{
        //     element_form.style.transform = 'scale(0)';
        //     element_form.style.zIndex = '-1';
        // },10000)






        let User_click_element = box_1.querySelector('.box_letter').innerText;

        switch(User_click_element){
            case'H':
                element_wrapper.innerHTML = "<p>1</p><p>H</p><p>Hydrogen</p>"

                element_description.innerText = "Hydrogen is the chemical element with the symbol H and atomic number 1. Hydrogen is the lightest element."

                element_other_info.innerHTML = "<p>Atomic mass:1.0078 u</p><br><p>Melting point:-259.16°C (13.99 K)</p><br><p>Boiling point:-252.87°C (20.28 K)</p><br><p>Discovery date:1766</p><br><p>Discovered by: Henry Cavendish</p>"
                break;
            case'Li':
                element_wrapper.innerHTML = "<p>3</p><p>Li</p><p>Lithium</p>"

                element_description.innerText = "Lithium is a soft, silvery-white, metal that heads group 1, the alkali metals group, of the periodic table of the elements. It reacts vigorously with water."

                element_other_info.innerHTML = "                    <p>Atomic mass:6.9410 u</p>                     <br>                                                <p>Melting point:180.54°C (453.69 K)</p>        <br>                                                <p>Boiling point:1342°C (1615.15 K)</p>        <br>                                                <p>Discovery date:1817</p>                               <br>                                            <p>Discovered by: Johan August Arfwedson</p>"
                break;
            case'Be':
                element_wrapper.innerHTML = "<p>4</p><p>Be</p><p>Beryllium</p>"

                element_description.innerText = "Beryllium is a chemical element with the symbol Be and atomic number 4. It is a steel-gray, strong, lightweight and brittle alkaline earth metal."

                element_other_info.innerHTML = "                    <p>Atomic mass:9.0122 u</p>                     <br>                                                <p>Melting point:1286.85°C (1560 K)</p>        <br>                                                <p>Boiling point:2469°C (2742.15 K)</p>        <br>                                                <p>Discovery date:1797</p>                               <br>                                            <p>Discovered by: <br>Louis Nicolas Vauquelin, Martin Heinrich Klaproth</p>"
                break;
            case'Na':
                element_wrapper.innerHTML = "<p>11</p><p>Na</p><p>Sodium</p>"

                element_description.innerText = "Sodium is a chemical element with the symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal."

                element_other_info.innerHTML = "                    <p>Atomic mass:22.990 u</p>                     <br>                                                <p>Melting point:97.79°C (370.94 K)</p>        <br>                                                <p>Boiling point:882.85°C (1156 K)</p>        <br>                                                <p>Discovery date:1807</p>                               <br>                                            <p>Discovered by: Humphry Davy"
                break;
            case'Mg':
                element_wrapper.innerHTML = "<p>11</p><p>Mg</p><p>Magnesium</p>"

                element_description.innerText = "Magnesium is a chemical element with the symbol Mg and atomic number 12. It is a shiny gray solid which shares many physical and chemical properties with the other five alkaline earth metals (group 2 of the periodic table)."

                element_other_info.innerHTML = "                    <p>Atomic mass:24.305 u</p>                     <br>                                                <p>Melting point:650°C (923.15 K)</p>        <br>                                                <p>Boiling point:1091°C (1364.15 K)</p>        <br>                                                <p>Discovery date:1755</p>                               <br>                                            <p>Discovered by: Humphry Davy, Joseph Black"
                break;
            case'K':
                element_wrapper.innerHTML = "<p>19</p><p>K</p><p>Potassium</p>"

                element_description.innerText = "Potassium is an essential mineral that is needed by all tissues in the body. It is sometimes referred to as an electrolyte because it carries a small electrical charge that activates various cell and nerve functions. Potassium is found naturally in many foods and as a supplement."

                element_other_info.innerHTML = "                    <p>Atomic mass:39.098 u</p>                     <br>                                                <p>Melting point:63.5°C (336.65 K)</p>        <br>                                                <p>Boiling point:758.85°C (1032 K)</p>        <br>                                                <p>Discovery date:1807</p>                               <br>                                            <p>Discovered by: Humphry Davy"
                break;
            case'Ca':
                element_wrapper.innerHTML = "<p>20</p><p>Ca</p><p>Calcium</p>"

                element_description.innerText = "Calcium is a mineral most often associated with healthy bones and teeth, although it also plays an important role in blood clotting, helping muscles to contract, and regulating normal heart rhythms and nerve functions."

                element_other_info.innerHTML = "                    <p>Atomic mass:40.078 u</p>                     <br>                                                <p>Melting point:842°C (1115.15 K)</p>        <br>                                                <p>Boiling point:1483.85°C (1757 K)</p>        <br>                                                <p>Discovery date:1808</p>                               <br>                                            <p>Discovered by: Humphry Davy"
                break;
            case'Sc':
                element_wrapper.innerHTML = "<p>21</p><p>Sc</p><p>Scandium</p>"

                element_description.innerText = "Scandium (Sc), chemical element, a rare-earth metal of Group 3 of the periodic table. scandium. Key People: Per Teodor Cleve Related Topics: chemical element rare-earth element. Scandium is a silvery white, moderately soft metal."

                element_other_info.innerHTML = "                    <p>Atomic mass:44.956 u</p>                     <br>                                                <p>Melting point:1540.85°C (1814 K)</p>        <br>                                                <p>Boiling point:2835.85°C (3109 K)</p>        <br>                                                <p>Discovery date:1879</p>                               <br>                                            <p>Discovered by: Per Teodor Cleve, Lars Fredrik Nilson"
                break;
            case'Rb':
                element_wrapper.innerHTML = "<p>37</p><p>Rb</p><p>Rubidium</p>"

                element_description.innerText = "Rubidium is the chemical element with the symbol Rb and atomic number 37. Rubidium is a very soft, whitish-grey metal in the alkali metal group. Rubidium metal shares similarities to potassium metal and caesium metal in physical appearance, softness and conductivity."

                element_other_info.innerHTML = "                    <p>Atomic mass:85.468 u</p>                     <br>                                                <p>Melting point:39.48°C (312.63 K)</p>        <br>                                                <p>Boiling point:688°C (961.15 K)</p>        <br>                                                <p>Discovery date:1861</p>                               <br>                                            <p>Discovered by: Gustav Kirchhoff, Robert Bunsen"
                break;
            case'Sr':
                element_wrapper.innerHTML = "<p>38</p><p>Sr</p><p>Strontium</p>"

                element_description.innerText = "Strontium is a silvery metal found naturally as a non-radioactive element. About 99% of the strontium in the human body is concentrated in the bones. Several different forms of strontium are used as medicine and strontium chloride is the most common form of strontium found in dietary supplements."

                element_other_info.innerHTML = "                    <p>Atomic mass:87.620 u</p>                     <br>                                                <p>Melting point:777°C (1050.15 K)</p>        <br>                                                <p>Boiling point:1381.85°C (1655 K)</p>        <br>                                                <p>Discovery date:1790</p>                               <br>                                            <p>Discovered by: <br>Humphry Davy, Adair Crawford, William Cruickshank"
                break;
            case'Y':
                element_wrapper.innerHTML = "<p>39</p><p>Y</p><p>Yttrium</p>"

                element_description.innerText = "Yttrium is a chemical element with the symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a 'rare-earth element'."

                element_other_info.innerHTML = "                    <p>Atomic mass:88.906 u</p>                     <br>                                                <p>Melting point:1526°C (1799.15 K)</p>        <br>                                                <p>Boiling point:3337.85°C (3611 K)</p>        <br>                                                <p>Discovery date:1794</p>                               <br>                                            <p>Discovered by: Johan Gadolin"
                break;
            case'Cs':
                element_wrapper.innerHTML = "<p>55</p><p>Cs</p><p>Caesium</p>"

                element_description.innerText = "Caesium (IUPAC spelling) (or cesium in American English) is a chemical element with the symbol Cs and atomic number 55. It is a soft, silvery-golden alkali metal with a melting point of 28.5 °C (83.3 °F), which makes it one of only five elemental metals that are liquid at or near room temperature."

                element_other_info.innerHTML = "                    <p>Atomic mass:132.91 u</p>                     <br>                                                <p>Melting point:28.44°C (301.59 K)</p>        <br>                                                <p>Boiling point:670.85°C (944 K)</p>        <br>                                                <p>Discovery date:1860</p>                               <br>                                            <p>Discovered by: Robert Bunsen, Gustav Kirchhoff"
                break;
            case'Ba':
                element_wrapper.innerHTML = "<p>56</p><p>Ba</p><p>Barium</p>"

                element_description.innerText = "Barium is a dense alkaline earth metal in Group IIA of the periodic table that occurs in nature as a divalent cation in combination with other elements. From: Annals of Nuclear Energy, 2017."

                element_other_info.innerHTML = "                    <p>Atomic mass:137.33 u</p>                     <br>                                                <p>Melting point:727°C (1000.15 K)</p>        <br>                                                <p>Boiling point:1897°C (2170.15 K)</p>        <br>                                                <p>Discovery date:1808</p>                               <br>                                            <p>Discovered by: Humphry Davy, Carl Wilhelm Scheele"
                break;
            case'La':
                element_wrapper.innerHTML = "<p>57</p><p>La</p><p>Lanthanum</p>"

                element_description.innerText = "Lanthanum is a chemical element with the symbol La and atomic number 57. It is a soft, ductile, silvery-white metal that tarnishes slowly when exposed to air."

                element_other_info.innerHTML = "                    <p>Atomic mass:138.91 u</p>                     <br>                                                <p>Melting point:920°C (1193.15 K)</p>        <br>                                                <p>Boiling point:3463.85°C (3737 K)</p>        <br>                                                <p>Discovery date:1839</p>                               <br>                                            <p>Discovered by: Carl Gustaf Mosander"
                break;
            case'Fr':
                element_wrapper.innerHTML = "<p>87</p><p>Fr</p><p>Francium</p>"

                element_description.innerText = "Francium (Fr), heaviest chemical element of Group 1 (Ia) in the periodic table, the alkali metal group. It exists only in short-lived radioactive forms. Natural francium cannot be isolated in visible, weighable amounts, for only 24.5 grams (0.86 ounce) occur at any time in the entire crust of Earth."

                element_other_info.innerHTML = "                    <p>Atomic mass:223 u</p>                     <br>                                                <p>Melting point:27°C (300.15 K)</p>        <br>                                                <p>Boiling point:676.85°C (950 K)</p>        <br>                                                <p>Discovery date:1939</p>                               <br>                                            <p>Discovered by: Carl Marguerite Perey"
                break;
            case'Ra':
                element_wrapper.innerHTML = "<p>88</p><p>Ra</p><p>Radium</p>"

                element_description.innerText = "Radium is silvery, lustrous, soft, intensely radioactive. It readily oxidizes on exposure to air, turning from almost pure white to black. Radium is luminescent, corrodes in water to form radium hydroxide. Although is the heaviest member of the alkaline-earth group it is the most volatile."

                element_other_info.innerHTML = "                    <p>Atomic mass:226 u</p>                     <br>                                                <p>Melting point:700°C (973.15 K)</p>        <br>                                                <p>Boiling point:1737°C (2010.15 K)</p>        <br>                                                <p>Discovery date:1898</p>                               <br>                                            <p>Discovered by: Marie Curie, Pierre Curie"
                break;
            case'Ac':
                element_wrapper.innerHTML = "<p>89</p><p>Ac</p><p>Actinium</p>"

                element_description.innerText = "Actinium is a silvery radioactive metallic element. Actinium glows in the dark due to its intense radioactivity with a blue light. Actinium was discovered in 1899 by André-Louis Debierne, a French chemist, who separated it from pitchblende. Friedrich Otto Giesel independently discovered actinium in 1902."

                element_other_info.innerHTML = "                    <p>Atomic mass:227 u</p>                     <br>                                                <p>Melting point:1050°C (1323.15 K)</p>        <br>                                                <p>Boiling point:3196.85°C (3470 K)</p>        <br>                                                <p>Discovery date:1899</p>                               <br>                                            <p>Discovered by: André-Louis Debierne"
                break;
            case'Rf':
                element_wrapper.innerHTML = "<p>104</p><p>Rf</p><p style='font-size:12px' >Rutherfordium</p>"

                element_description.innerText = "About 538,000 results (0.45 seconds) Rutherfordium is a synthetic chemical element. Its official chemical symbol is Rf, and its atomic number is 104, which means that a rutherfordium atom has 104 protons in its nucleus. Rutherfordium was the first super-heavy element to be discovered."

                element_other_info.innerHTML = "                    <p>Atomic mass:261 u</p>                     <br>                                                <p>Melting point:2100°C (2373.15 K)</p>        <br>                                                   <p>Discovery date:1964</p>                               <br>                                            <p>Discovered by: <br>Albert Ghiorso, Joint Institute for Nuclear Research, Ernest Rutherford"
                break;
            case'Db':
                element_wrapper.innerHTML = "<p>105</p><p>Db</p><p>Dubnium</p>"

                element_description.innerText = "Dubnium (Db), an artificially produced radioactive transuranium element in Group Vb of the periodic table, atomic number 105. The discovery of dubnium (element 105), like that of rutherfordium (element 104), has been a matter of dispute between Soviet and American scientists."

                element_other_info.innerHTML = "                    <p>Atomic mass:262 u</p>                     <br>                                                   <p>Discovery date:1967</p>                               <br>                                            <p>Discovered by: Albert Ghiorso"
                break;
            case'Sg':
                element_wrapper.innerHTML = "<p>106</p><p>Sg</p><p>Seaborgium</p>"

                element_description.innerText = "Seaborgium is a synthetic chemical element with the symbol Sg and atomic number 106. It is named after the American nuclear chemist Glenn T. Seaborg. As a synthetic element, it can be created in a laboratory but is not found in nature."

                element_other_info.innerHTML = "                    <p>Atomic mass:269.128 u</p>                     <br>                                                   <p>Discovery date:1974</p>                               <br>                                            <p>Discovered by: <br>Albert Ghiorso, Lawrence Berkeley National Laboratory"
                break;
            case'Bh':
                element_wrapper.innerHTML = "<p>107</p><p>Bh</p><p>Bohrium</p>"

                element_description.innerText = "Bohrium is a synthetic chemical element with the symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. As a synthetic element, it can be created in a laboratory but is not found in nature."

                element_other_info.innerHTML = "                    <p>Atomic mass:264 u</p>                     <br>                                                   <p>Discovery date:1981</p>                               <br>                                            <p>Discovered by: <br>Peter Armbruster, Gottfried Münzenberg"
                break;
            case'Hs':
                element_wrapper.innerHTML = "<p>108</p><p>Hs</p><p>Hassium</p>"

                element_description.innerText = "Hassium is a chemical element with the symbol Hs and the atomic number 108. Hassium is highly radioactive; its most stable known isotopes have half-lives of approximately ten seconds."

                element_other_info.innerHTML = "                    <p>Atomic mass:269 u</p>                     <br>                                                   <p>Discovery date:1984</p>                               <br>                                            <p>Discovered by: Peter Armbruster, Gottfried Münzenberg"
                break;
            case'Mt':
                element_wrapper.innerHTML = "<p>109</p><p>Mt</p><p>Meitnerium</p>"

                element_description.innerText = "Meitnerium is a synthetic chemical element with the symbol Mt and atomic number 109. It is an extremely radioactive synthetic element. The most stable known isotope, meitnerium-278, has a half-life of 4.5 seconds, although the unconfirmed meitnerium-282 may have a longer half-life of 67 seconds."

                element_other_info.innerHTML = "                    <p>Atomic mass:278 u</p>                     <br>                                                   <p>Discovery date:1982</p>                               <br>                                            <p>Discovered by: Gottfried Münzenberg, Peter Armbruster"
                break;
            case'Ds':
                element_wrapper.innerHTML = "<p>110</p><p>Ds</p><p>Darmstadtium</p>"

                element_description.innerText = "Darmstadtium is a chemical element with the symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 12.7 seconds."

                element_other_info.innerHTML = "                    <p>Atomic mass:281 u</p>                     <br>                                                   <p>Discovery date:1994</p>                               <br>                                            <p>Discovered by: Sigurd Hofmann"
                break;
            case'Rg':
                element_wrapper.innerHTML = "<p>111</p><p>Rg</p><p>Roentgenium</p>"

                element_description.innerText = "Roentgenium is a chemical element with the symbol Rg and atomic number 111. It is an extremely radioactive synthetic element that can be created in a laboratory but is not found in nature."

                element_other_info.innerHTML = "                    <p>Atomic mass:282 u</p>                     <br>                                                   <p>Discovery date:1994</p>                               <br>                                            <p>Discovered by: Victor Ninov, Sigurd Hofmann"
                break;
            case'Cn':
                element_wrapper.innerHTML = "<p>112</p><p>Cn</p><p>Copernicium</p>"

                element_description.innerText = "Copernicium is a synthetic chemical element with the symbol Cn and atomic number 112. Its known isotopes are extremely radioactive, and have only been created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 28 seconds."

                element_other_info.innerHTML = "                    <p>Atomic mass:285 u</p>                     <br>                                                   <p>Discovery date:1996</p>                               <br>                                            <p>Discovered by: Victor Ninov, Sigurd Hofmann"
                break;
            case'Nh':
                element_wrapper.innerHTML = "<p>113</p><p>Nh</p><p>Nihonium</p>"

                element_description.innerText = "Nihonium is a synthetic chemical element with the symbol Nh and atomic number 113. It is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of about 10 seconds. In the periodic table, nihonium is a transactinide element in the p-block. It is a member of period 7 and group 13."

                element_other_info.innerHTML = "                    <p>Atomic mass:286 u</p>                     <br>                                                   <p>Discovery date:2003</p>                               <br>                                            <p>Discovered by: Riken"
                break;
            case'Fl':
                element_wrapper.innerHTML = "<p>114</p><p>Fl</p><p>Flerovium</p>"

                element_description.innerText = "Flerovium is a superheavy chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. It is named after Flerov Laboratory of Nuclear Reactions of Joint Institute for Nuclear Research, Dubna, Russia, where the element was discovered in 1998."

                element_other_info.innerHTML = "                    <p>Atomic mass:289 u</p>                     <br>                                                   <p>Discovery date:1998</p>                               <br>                                            <p>Discovered by: <br>Joint Institute for Nuclear Research, Sigurd Hofmann, Flerov Laboratory of Nuclear Reactions"
                break;
            case'Mc':
                element_wrapper.innerHTML = "<p>115</p><p>Mc</p><p>Moscovium</p>"

                element_description.innerText = "Moscovium is a synthetic element with the symbol Mc and atomic number 115. It was first synthesized in 2003 by a joint team of Russian and American scientists at the Joint Institute for Nuclear Research in Dubna, Russia."

                element_other_info.innerHTML = "                    <p>Atomic mass:289 u</p>                     <br>                                                   <p>Discovery date:2003</p>                               <br>                                            <p>Discovered by: Joint Institute for Nuclear Research"
                break;
            case'Lv':
                element_wrapper.innerHTML = "<p>116</p><p>Lv</p><p>Livermorium</p>"

                element_description.innerText = "Livermorium is a synthetic chemical element with the symbol Lv and has an atomic number of 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature."

                element_other_info.innerHTML = "                    <p>Atomic mass:293 u</p>                     <br>                                                   <p>Discovery date:2000</p>                               <br>                                            <p>Discovered by: Joint Institute for Nuclear Research"
                break;
            case'Ts':
                element_wrapper.innerHTML = "<p>117</p><p>Ts</p><p>Tennessine</p>"

                element_description.innerText = "Tennessine is a synthetic chemical element with the symbol Ts and atomic number 117. It is the second-heaviest known element and the penultimate element of the 7th period of the periodic table."

                element_other_info.innerHTML = "                <p>Boiling point:610°C (883.15 K)</p>                               <br>                                            <p>Atomic mass:294.211 u</p>                     <br>                                                   <p>Discovery date:2010</p>                               <br>                                            <p>Discovered by: Joint Institute for Nuclear Research, Yuri Oganessian"
                break;
            case'Og':
                element_wrapper.innerHTML = "<p>118</p><p>Og</p><p>Oganesson</p>"

                element_description.innerText = "Oganesson is a synthetic chemical element with the symbol Og and atomic number 118. It was first synthesized in 2002 at the Joint Institute for Nuclear Research in Dubna, near Moscow, Russia, by a joint team of Russian and American scientists."

                element_other_info.innerHTML = "                <p>Atomic mass:294.211 u</p>                     <br>                                                   <p>Discovery date:2002</p>                               <br>                                            <p>Discovered by: Joint Institute for Nuclear Research, Yuri Oganessian"
                break;


























            default:
                alert('Something Wrong!!');
                break;
        }
    })
})