
            var a=document.getElementById("gues")
            var result=document.getElementById("result")
            var rand=Math.floor(Math.random()*10)+1
            var score=5
            var point=document.getElementById("point")
            var total=0
            function chek()
            {
                var gen=a
                if(rand==gen)
                {
                    result.textContent="You win"
                    console.log("You win")
                    total+=5
                    point.textContent="Points:"+total
                }
                else{
                    result.textContent="You loss"
                    console.log("You loss")
                    if(score>0)
                    {
                    score=score-1
                    chn.textContent="Chances:"+score
                    }
                else{
                    chn.textContent="Ranned out of chances"
                }
                }
            }