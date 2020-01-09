//sushi as objects array established
const menu = [
    {
        name: 'vegetable roll',
        daikon: true,
        cucumber: true,
        yamagobo: true,
        takuwan: true,
        seaweed_salad: true,
        avocado: true,
        type: 'classic roll',
        pieces: 6,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'negi hama roll',
        yellowtail: true,
        green_onion: true,
        type: 'classic',
        pieces: 6,
        raw: true,
        no_spicy: true
    },
    {
        name: 'alaska roll',
        salmon: true,
        avocado: true,
        type: 'classic',
        pieces: 8,
        raw: true,
        no_spicy: true
    },
    {
        name: 'yum yum roll',
        scallop: true,
        crabmix: true,
        yum_yum_sauce: true,
        type: 'classic',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'california roll',
        crabmix: true,
        avocado: true,
        cucumber: true,
        type: 'classic',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'philadelphia roll',
        salmon: true,
        cream_cheese: true,
        avocado: true,
        type: 'classic',
        pieces: 8,
        raw: true,
        no_spicy: true
    },
    {
        name: 'spicy california roll',
        spicy_crabmix: true,
        avocado: true,
        cucumber: true,
        type: 'classic',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'spicy tuna roll',
        spicy_tuna: true,
        cucumber: true,
        type: 'classic',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'spicy salmon roll',
        salmon: true,
        cucumber: true,
        spicy_mayo: true,
        sriracha: true,
        shichimi: true,
        type: 'classic',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'salmon skin roll',
        salmon_skin: true,
        avocado: true,
        cucumber: true,
        yamagobo: true,
        eel_sauce: true,
        type: 'classic',
        pieces: 6,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'mahalo roll',
        spam: true,
        type: 'classic',
        pieces: 6,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'shrimp tempura roll',
        shrimp_tempura: true,
        crabmix: true,
        avocado: true,
        cucumber: true,
        tempura_crunch: true,
        eel_sauce: true,
        type: 'classic',
        pieces: 6,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'spider roll',
        softshell_crab: true,
        avocado: true,
        cucumber: true,
        yamagobo: true,
        eel_sauce: true,
        type: 'classic',
        pieces: 6,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'rainbow roll',
        crabmix: true,
        cucumber: true,
        tuna: true,
        salmon: true,
        shrimp: true,
        white_fish: true,
        type: 'classic',
        pieces: 8,
        raw: true,
        no_spicy: true
    },
    {
        name: 'lisa lisa',
        shrimp_tempura: true,
        avocado: true,
        cream_cheese: true,
        crabmix: true,
        tempura_crunch: true,
        yum_yum_sauce: true,
        type: 'classic',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'veggie crunch',
        tempura_asparagus: true,
        sweet_potato: true,
        pumpkin: true,
        tempura_crunch: true,
        eel_sauce: true,
        type: 'classic',
        pieces: 6,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'shaggy dog',
        spicy_softshell_crab: true,
        spicy_crabmix: true,
        shredded_crab_stick: true,
        tempura_crunch: true,
        yum_yum_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'sunkist',
        shrimp_tempura: true,
        crabmix: true,
        avocado: true,
        cucumber: true,
        smoked_salmon: true,
        tempura_crunch: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'jackpot',
        shrimp_tempura: true,
        spicy_crabmix: true,
        shrimp: true,
        avocado: true,
        tempura_crunch: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'crouching tiger',
        shrimp_tempura: true,
        cucumber: true,
        crabmix: true,
        avocado: true,
        eel_sauce: true,
        spicy_mayo: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'popcorn lobster',
        crabmix: true,
        avocado: true,
        cucumber: true,
        tempura_lobster: true,
        yum_yum_sauce: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'popcorn scallop',
        crabmix: true,
        avocado: true,
        cucumber: true,
        scallop_tempura: true,
        yum_yum_sauce: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'popcorn shrimp',
        crabmix: true,
        avocado: true,
        cucumber: true,
        shrimp_tempura: true,
        yum_yum_sauce: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'shrimp lover',
        shrimp_tempura: true,
        crabmix: true,
        cucumber: true,
        shrimp: true,
        avocado: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'caterpillar',
        eel: true,
        cucumber: true,
        crabmix: true,
        avocado: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'dragon',
        california: true,
        eel: true,
        avocado: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'hidden dragon',
        eel_tempura: true,
        cucumber: true,
        crabmix: true,
        avocado: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'dancing eel',
        shrimp_tempura: true,
        cucumber: true,
        crabmix: true,
        eel: true,
        shrimp: true,
        avocado: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'bagel',
        bacon: true,
        tamago: true,
        cream_cheese: true,
        smoked_salmon: true,
        avocado: true,
        eel_sauce: true,
        spicy_mayo: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'something wrong',
        shrimp_tempura: true,
        softshell_crab: true,
        spicy_crabmix: true,
        tuna: true,
        yellowtail: true,
        salmon: true,
        radish: true,
        green_onion: true,
        ponzu_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'hawaii five o',
        spicy_tuna: true,
        cucumber: true,
        tuna: true,
        avocado: true,
        goma_sauce: true,
        goma: 'is sesame',
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'special alaska',
        california: true,
        salmon: true,
        lemon_slices: true,
        ponzu_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        no_spicy: true
    },
    {
        name: 'rolls royce',
        spicy_tuna: true,
        cucumber: true,
        poke_salad: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: '21 roll',
        spicy_tuna: true,
        crabmix: true,
        albacore: true,
        fried_onion: true,
        soy_mustard_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'fire cracker',
        salmon: true,
        jalapeno: true,
        bay_scallops: true,
        spicy_mayo: true,
        sriracha: true,
        ponzu_sauce: true,
        jalapeno: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'cowboy ride',
        spicy_tuna: true,
        crabmix: true,
        seared_beef: true,
        green_onion: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    }, 
    {
        name: 'sunrise roll',
        spicy_crabmix: true,
        cucumber: true,
        salmon: true,
        avocado: true,
        green_onion: true,
        spicy_garlic_ponzu: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'fire in the hole',
        spicy_tuna: true,
        spicy_crabmix: true,
        tuna: true,
        avocado: true,
        jalapeno: true,
        green_onion: true,
        spicy_ponzu: true,
        wasabi_aoli: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'sun of the beach',
        shrimp_tempura: true,
        eel: true,
        salmon: true,
        avocado: true,
        green_onion: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'naked girl',
        shrimp_tempura: true,
        avocado: true,
        spicy_crabmix: true,
        softshell_crab: true,
        super_white_tuna: true,
        eel_sauce: true,
        wasabi_aoli: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'super rainbow',
        shrimp_tempura: true,
        cucumber: true,
        tuna:true,
        salmon: true,
        super_white_tuna: true,
        shrimp: true,
        color_tobiko: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        no_spicy: true
    }, 
    {
        name: 'super tiger',
        shrimp_tempura: true,
        cucumber: true,
        spicy_tuna: true,
        shrimp: true,
        avocado: true,
        eel_sauce: true,
        spicy_mayo: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'energy',
        shrimp_tempura: true,
        crabmix: true,
        cucumber: true,
        salmon: true,
        eel: true,
        tempura_crunch: true,
        eel_sauce: true,
        spicy_mayo: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'hot tonight',
        shrimp_tempura: true,
        cream_cheese: true,
        avocado: true,
        salmon: true,
        tempura_crunch: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'mr playboy',
        shrimp_tempura: true,
        cucumber: true,
        spicy_crabmix: true,
        tuna: true,
        yellowtail: true,
        avocado: true,
        tempura_crunch: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'chanel',
        shrimp_tempura: true,
        spicy_crabmix: true,
        tuna: true,
        salmon: true,
        super_white_tuna: true,
        white_fish: true,
        screaming_o_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    }, 
    {
        name: 'no name',
        eel: true,
        shrimp_tempura: true,
        salmon: true,
        tempura_crunch: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        soy_paper: true,
        spicy: true
    },
    {
        name: 'super ono',
        spicy_crabmix: true,
        cream_cheese: true,
        shrimp_tempura: true,
        super_white_tuna: true,
        spicy_garlic_ponzu: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'aloha roll',
        spicy_california: true,
        seared_salmon: true,
        seared_tuna: true,
        ponzu_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'orange blossom',
        mango: true,
        shrimp_tempura: true,
        cream_cheese: true,
        avocado: true,
        salmon: true,
        ponzu_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        soy_paper: true,
        no_spicy: true
    },
    {
        name: 'monster',
        spicy_tuna: true,
        shrimp_tempura: true,
        crabmix: true,
        eel: true,
        shrimp: true,
        spicy_mayo: true,
        eel: true,
        sriracha: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'ichiban',
        shrimp_tempura: true,
        cream_cheese: true,
        avocado: true,
        salmon: true,
        lemon_slices: true,
        yum_yum_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        no_spicy: true
    }, 
    {
        name: 'double salmon',
        salmon_tempura: true,
        cucumber: true,
        salmon: true,
        type: 'speciality',
        pieces: 5,
        raw: true,
        no_spicy: true
    }, 
    {
        name: 'xxx',
        spicy_crabmix: true,
        softshell_crab: true,
        spicy_tuna: true,
        salmon: true,
        screaming_o_sauce: true,
        sriracha: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'first kiss',
        shrimp_tempura: true,
        spicy_crabmix: true,
        softshell_crab: true,
        salmon: true,
        super_white_tuna: true,
        screaming_o_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        soy_paper: true,
        spicy: true
    },
    {
        name: 'firework',
        spicy_crabmix: true,
        tempura_snapper: true,
        cucumber: true,
        spicy_tuna: true,
        fried_onion: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'ono box',
        tuna: true,
        salmon: true,
        white_fish: true,
        green_onion: true,
        tempura_crunch: true,
        wasabi_soy_vinaigrette: true,
        type: 'speciality',
        pieces: 8,
        raw: true,
        no_spicy: true
    },
    {
        name: 'big d raider',
        tuna: true,
        cream_cheese: true,
        green_onion: true,
        bay_scallops: true,
        wasabi_aoli: true,
        type: 'speciality',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'screaming o',
        salmon: true,
        crabmix: true,
        screaming_o_sauce: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        no_spicy: true
    },
    {
        name: 'mango tango',
        mango: true,
        unagi: true,
        cream_cheese: true,
        avocado: true,
        eel_sauce: true,
        sweet_chili_sauce: true,
        type: 'deep fried',
        pieces: 5,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'u.f.o',
        spicy_tuna: true,
        crabmix: true,
        super_white_tuna: true,
        cream_cheese: true,
        spicy_mayo: true,
        yum_yum_sauce: true,
        sriracha: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        spicy: true
    },
    {
        name: 'golden knight',
        eel: true,
        crabmix: true,
        cream_cheese: true,
        avocado: true,
        tempura_crunch: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'golden california',
        california: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'golden spicy tuna',
        spicy_tuna: true,
        cucumber: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        spicy: true
    },
    {
        name: 'golden philadelphia',
        salmon: true,
        cream_cheese: true,
        avocado: true,
        yum_yum_sauce: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        no_spicy: true
    },
    {
        name: 'vegas roll',
        salmon: true,
        crabmix: true,
        eel: true,
        avocado: true,
        cream_cheese: true,
        masago: true,
        green_onion: true,
        yum_yum_sauce: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        no_spicy: true
    },
    {
        name: 'mi amor',
        salmon: true,
        spicy_tuna: true,
        spicy_crabmix: true,
        popcorn_shrimp: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        spicy: true
    },
    {
        name: 'fuji',
        spicy_tuna: true,
        cucumber: true,
        spicy_mayo: true,
        eel_sauce: true,
        bay_scallops: true,
        wasabi_aoli: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        spicy: true
    },
    {
        name: 'golden tiger',
        shrimp_tempura: true,
        avocado: true,
        cream_cheese: true,
        spicy_tuna: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        raw: true,
        spicy: true
    },
    {
        name: 'super crunch',
        spicy_lobster_mix: true,
        cream_cheese: true,
        avocado: true,
        yum_yum_sauce: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 5,
        no_raw: true,
        spicy: true
    },
    {
        name: 'crispy rice',
        spicy_tuna: true,
        crispy_rice: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'deep fried',
        pieces: 4,
        raw: true,
        spicy: true
    },
    {
        name: 'baked salmon',
        california: true,
        baked_chopped_salmon: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'baked',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'baked lobster',
        california: true,
        baked_lobster: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'baked',
        pieces: 8,
        no_raw: true,
        spicy: true
    },
    {
        name: 'baked scallops',
        california: true,
        baked_scallops: true,
        yum_yum_sauce: true,
        eel_sauce: true,
        type: 'baked',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'valley on fire',
        spicy_crabmix: true,
        avocado: true,
        spicy_tuna: true,
        green_onion: true,
        masago: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'baked',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'japanese lasagna',
        california: true,
        cream_cheese: true,
        garlic_mayo: true,
        type: 'baked',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'grand canyon',
        california: true,
        dynamite_mix: true,
        garlic_mayo: true,
        green_onion: true,
        eel_sauce: true,
        masago: true,
        type: 'baked',
        pieces: 8,
        no_raw: true,
        no_spicy: true
    },
    {
        name: 'sexy lady',
        shrimp_tempura: true,
        eel: true,
        salmon: true,
        avocado: true,
        green_onion: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'baked',
        pieces: 8,
        raw: true,
        no_spicy: true
    },
    {
        name: 'cha cha',
        shrimp_tempura: true,
        cucumber: true,
        cream_cheese: true,
        salmon: true,
        bacon_bits: true,
        spicy_mayo: true,
        eel_sauce: true,
        type: 'baked',
        pieces: 8,
        raw: true,
        spicy: true
    },
    {
        name: 'naruto',
        tuna: true,
        salmon: true,
        white_fish: true,
        mustard_sauce: true,
        pieces: 'unknown for now',
        raw: true,
        no_spicy: true,
        cucumber_wrap: true
    },
    {
        name: 'mr johnny',
        shrimp_tempura: true,
        crabmix: true,
        eel_sauce: true,
        pieces: 'unknown for now',
        no_raw: false,
        no_spicy: true,
        cucumber_wrap: true
    },
    {
        name: 'avatar',
        red_snapper_tempura: true,
        spicy_crabmix: true,
        screaming_o_sauce: true,
        pieces: 'unknown for now',
        no_raw: true,
        spicy: true,
        cucumber_wrap: true
    }
]

console.log(menu.length)

//Ingredients array established
let cb = []
menu.forEach(function(data){
    for(let x=0; x<Object.keys(data).length; x++){
        if(!cb.includes(Object.keys(data)[x]) && Object.keys(data)[x] !== "name" && Object.keys(data)[x] !== "type" && Object.keys(data)[x] !== "pieces"){
            cb.push(Object.keys(data)[x])
        }
    }
})

let cb_sort = cb.sort()

//Include buttons established
let include_arr = []
let include = document.getElementById('include')
cb_sort.forEach(function(data){
    let add_bt = document.createElement('button')
    add_bt.style.width = '100%'
    add_bt.style.fontSize = '25px'
    add_bt.style.marginBottom = '15px'
    add_bt.innerHTML = data
    add_bt.addEventListener('click',function(){ 
        if(add_bt.style.backgroundColor !== 'green'){
            add_bt.style.backgroundColor = 'green';
            if(include_arr.includes(add_bt.innerHTML)){
            }else{
                include_arr.push(add_bt.innerHTML)
            }
            console.log('in' + ' ' + include_arr)
        }else{
            add_bt.style.backgroundColor = 'white'
            for(let x=0; x<include_arr.length; x++){
                if(include_arr[x] == add_bt.innerHTML){
                    include_arr.splice(x,1)
                }
            }
            console.log('in' + ' ' + include_arr)
        }
    })
    include.appendChild(add_bt)
})

//Exclude buttons established
let exclude_arr = []
let exclude = document.getElementById('exclude')
cb_sort.forEach(function(data){
    let del_bt = document.createElement('button')
    del_bt.style.width = '100%'
    del_bt.style.fontSize = '25px'
    del_bt.style.marginBottom = '15px'
    del_bt.innerHTML = data
    del_bt.addEventListener('click',function(){ 
        if(del_bt.style.backgroundColor !== 'red'){
            del_bt.style.backgroundColor = 'red';
            if(exclude_arr.includes(del_bt.innerHTML)){
            }else{
                exclude_arr.push(del_bt.innerHTML)
            }
            console.log('ex' + ' ' + exclude_arr)
        }else{
            del_bt.style.backgroundColor = 'white'
            for(let x=0; x<exclude_arr.length; x++){
                if(exclude_arr[x] == del_bt.innerHTML){
                    exclude_arr.splice(x,1)
                }
            }
            console.log('ex' + ' ' + exclude_arr)
        }
    })
    exclude.appendChild(del_bt)
})

//Get objects from menu that contain the strings from include_arr
//Get strings from exclude_arr and remove anything from include_arr that contains those strings
//Populate final_arr
//Populate results div

let submit = document.getElementById('submit')

submit.addEventListener('click',function(){
    let final_arr = []
    submit.disabled = true

    //Get objects from menu array that contain strings from include_arr
    menu.forEach(function(data){
        for(let x=0; x<include_arr.length; x++){
            if(Object.keys(data).includes(include_arr[x])){
                    final_arr.push(data)
            }
        }
    })

    //Get objects from final_arr that contain the strings from exclude_arr and remove them
    final_arr.forEach(function(data,index,object){
        for(let x=0; x<exclude_arr.length; x++){
            if(Object.keys(data).includes(exclude_arr[x])){                
                final_arr[index] = "removed"
            }
        }
    })

    //sort final_arr
    let sorted_arr = []
    for(x=0; x<final_arr.length; x++){
        if(final_arr[x] !== "removed"){
            sorted_arr.push(final_arr[x])
        }
    }

    let res_length = sorted_arr.length
    let count = document.getElementById('count')
    count.style.margin = '10px'
    count.innerHTML = 'Results: ' + res_length
    // console.log(sorted_arr)

    //populate results div
    let results = document.getElementById('results')
    results.style.border = '1px solid black'
    results.style.height = '400px'
    results.style.overflowY = 'scroll'
    results.style.padding = '10px'

    sorted_arr.forEach(function(data){

        let sushi_card = document.createElement('div')       
        sushi_card.style.border = '1px solid black'
        sushi_card.style.margin = '10px'
        sushi_card.style.padding = '10px'

        for(let x=0; x<Object.keys(data).length; x++){
            let brk = document.createElement('br')
            if(Object.keys(data)[x] == 'name' || Object.keys(data)[x] == 'pieces' || Object.keys(data)[x] == 'type' || Object.keys(data)[x] == 'raw' || Object.keys(data)[x] == 'spicy' || Object.keys(data)[x] == 'no_raw' || Object.keys(data)[x] == 'no_spicy' || Object.keys(data)[x] == 'soy_paper' || Object.keys(data)[x] == 'cucumber_wrap'){
                let descriptor = document.createTextNode(Object.keys(data)[x] + ': ' + Object.values(data)[x])
                sushi_card.appendChild(descriptor)
                sushi_card.appendChild(brk)
            }else{
                let ingredient = document.createTextNode(Object.keys(data)[x])
                sushi_card.appendChild(ingredient)
                sushi_card.appendChild(brk)
            }
            results.appendChild(sushi_card)
        }
    })
    
})

let reset = document.getElementById('reset')
reset.addEventListener('click',function(){
    location.reload()
    include_arr = []
    console.log(include_arr)
    exclude_arr = []
    console.log(exclude_arr)
    final_arr = []
    console.log(final_arr)
})

let name_list = document.getElementById('name_list')
name_list.style.textAlign = 'center'
let name_found = document.getElementById('name_found')
name_found.style.padding = '10px'
name_found.style.border = '1px solid black'
name_found.style.textAlign = 'center'
name_found.style.fontSize = '12.5px'


let name_arr = []

menu.forEach((data)=>{
    name_arr.push(data.name)
    name_arr.sort()
})

name_arr.forEach((data)=>{
    let name_bt = document.createElement('button')
    name_bt.style.width = '90%'
    name_bt.style.fontSize = '10px'
    name_bt.style.marginBottom = '2.5px'
    name_bt.style.fontSize = '12.5px'
    name_bt.innerHTML = data
    name_list.appendChild(name_bt)

    name_bt.addEventListener('click',function(){
        let found_div = document.createElement('div') 
        found_div.style.border = '1px solid black'
        found_div.style.padding = '10px'

        for(let x=0; x<menu.length; x++){
            if(name_bt.innerHTML == menu[x].name){
                for(let res in menu[x]){
                    // console.log(res) // --> keys
                    // console.log(menu[x][res]) // --> values
                    if(res == 'name' || res == 'type' || res == 'pieces' || res == 'raw' || res == 'spicy' || res == 'no_spicy' || res == 'no_raw'){
                        let found_KeyVal = document.createTextNode(res + ': ' + menu[x][res])
                        found_div.appendChild(found_KeyVal)
                        found_div.appendChild(document.createElement('br'))
                    }else{
                        let found_key = document.createTextNode(res)
                        found_div.appendChild(found_key)
                        found_div.appendChild(document.createElement('br'))
                    }
                }
            }
        }
        console.log(found_div)
        name_found.innerHTML = found_div.innerHTML
    })
})

