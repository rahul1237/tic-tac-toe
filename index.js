const x_class = 'x'
const o_class = 'o'
const boxelem = document.querySelectorAll('[box-data]')
const grid_data = document.getElementById('grid')
let turn_o 

player1()

function player1(){
    turn_o = false
    boxelem.forEach(box => {
        box.addEventListener('click', handleClick , {once: true})
    })
    empty_place()
}

function handleClick(e){
    const box = e.target
    const at_mome = turn_o ? o_class : x_class
    symboll(box,at_mome)

    change_turn()
    empty_place()
}

function symboll(box,at_mome){
    box.classList.add(at_mome)
}

function change_turn(){
    turn_o = !turn_o
}

function empty_place(){
    grid_data.classList.remove(x_class)
    grid_data.classList.remove(o_class)
    if(turn_o){
        grid_data.classList.add(o_class)
    }else{
        grid_data.classList.add(x_class)
    }
}