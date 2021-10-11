window.addEventListener('load', (event) => {
   
    const boardContainer =  document.getElementById('board');
    const board = boardContainer.childNodes;

    console.log(board);

    for (let i =0; i < board.length; i++)
    {
        board[i].className = 'square';
    }


    let turn =0;


    for (let i =1; i < board.length; i+=2)
    {
        board[i].addEventListener("click",function(mark){
            if (turn%2 == 0)
            {
                if(mark.target.textContent ==''){
                    mark.target.className += " X"
                    mark.target.textContent = "X"
                    turn++;
                    winner();
    
                }
            }
            else
            {
                if(mark.target.textContent ==''){
                    mark.target.className += " O"
                    mark.target.textContent = "O"
                    turn++;
                    winner();
    
                }
            }
        });
    }

    for (let i =0; i < board.length; i++)
    {
        board[i].addEventListener("mouseover",function(e){
            board[i].className += " hover";
        })

        board[i].addEventListener("mouseout",function(e){
            board[i].classList.remove("hover");
        })

    }

    function winner(){
        const winningCombos = [
            [0,3,6],
            [1,4,7],
            [3,4,5],
            [0,1,2],
            [6,7,8],
            [2,5,8],
            [2,4,6],
            [0,4,8],
        ];  
        
        let pos0,pos1,pos2;
        const squares = document.querySelectorAll('.square');

        for (let j =0; j < winningCombos.length; j++)
        { 
            
            if(squares[winningCombos[j][0]].hasChildNodes()){
                pos0 = squares[winningCombos[j][0]].childNodes[0].textContent
                // console.log(pos0);
            }
            else{
                pos0 ="";
            }

            if(squares[winningCombos[j][1]].hasChildNodes()){
                pos1 = squares[winningCombos[j][1]].childNodes[0].textContent
                // console.log(pos1);

            }
            else{
                pos1 ="";
            }

            if(squares[winningCombos[j][2]].hasChildNodes()){
                pos2 = squares[winningCombos[j][2]].childNodes[0].textContent
                // console.log(pos2);

            }
            else{
                pos2 ="";
            }

            if (pos0 != '' && pos1!='' && pos2!=''){
                if (pos1 == pos2 && pos1 == pos0)
                {
                    let winner = document.getElementById('status');
                    winner.innerHTML = `Congratulations! ${pos0} is the Winner!`
                    winner.classList.add('you-won');

                }
            }


        }

    }






});


  