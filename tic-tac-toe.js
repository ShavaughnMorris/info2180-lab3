window.addEventListener('load', (event) => {
   
    const boardContainer =  document.getElementById('board');
    const board = boardContainer.childNodes;

    console.log(board);

    for (let i =0; i < board.length; i++)
    {
        board[i].className = 'square';
    }


    let turn =0;

    function  addMarker(mark){
        if (turn%2 == 0)
        {
            if(mark.target.textContent ==''){
                mark.target.className += " X"
                mark.target.textContent = "X"
                turn++;

            }
        }
        else
        {
            if(mark.target.textContent ==''){
                mark.target.className += " O"
                mark.target.textContent = "O"
                turn++;

            }
        }
    }



    for (let i =1; i < board.length; i+=2)
    {
        board[i].addEventListener("click",function(mark){
            if (turn%2 == 0)
            {
                if(mark.target.textContent ==''){
                    mark.target.className += " X"
                    mark.target.textContent = "X"
                    turn++;
    
                }
            }
            else
            {
                if(mark.target.textContent ==''){
                    mark.target.className += " O"
                    mark.target.textContent = "O"
                    turn++;
    
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


});


  