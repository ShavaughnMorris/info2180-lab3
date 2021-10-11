window.addEventListener('load', (event) => {
   
    const boardContainer =  document.getElementById('board');
    const board = boardContainer.childNodes

    console.log(board);

    for (let i =0; i < board.length; i++)
    {
        board[i].className = 'square';
    }
    

});
  