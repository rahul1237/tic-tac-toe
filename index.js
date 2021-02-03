const x_class = 'x'
const o_class = 'o'
const boxelem = document.querySelectorAll('[box-data]')
const grid_data = document.getElementById('grid')
const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const winning_message_elem = document.getElementById('message')
const winning_message = document.querySelector('[winning-message]')
const btn = document.getElementById('restart-button')
let turn_o 

player1()

btn.addEventListener('click',player1)

function player1(){
    turn_o = false
    boxelem.forEach(box => {
        box.classList.remove(x_class)
        box.classList.remove(o_class)
        box.removeEventListener('click',handleClick)
        box.addEventListener('click', handleClick , {once: true})
    })
    empty_place()
    winning_message_elem.classList.remove('show')
}

function handleClick(e){
    const box = e.target
    const at_mome = turn_o ? o_class : x_class
    symboll(box,at_mome)
    if(winner(at_mome)){
        end(false)
    }else if(isequal()){
        end(true)
    }else{
        change_turn()
        empty_place()    
    }
}

function symboll(box,at_mome){
    box.classList.add(at_mome)
}

function change_turn(){
    turn_o = !turn_o
}

function isequal(){
    return [...boxelem].every(box =>{
        return box.classList.contains(x_class) || box.classList.contains(o_class)
    })
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

function winner(at_mome){
    return win.some(combination =>{
        return combination.every(index => {
            return boxelem[index].classList.contains(at_mome)
        })
    })
}

function end(equal) {
    if(equal){
          winning_message.innerText = 'DRAW'
    }else{
        winning_message.innerText = `${turn_o ? "o" : "x"} wins`
    }   
    winning_message_elem.classList.add('show')
}