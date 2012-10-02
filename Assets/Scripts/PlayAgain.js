static var gameOver:int = 0; 

function Update () 
{
	
if(gameOver == 1)
	{	
		this.renderer.enabled = true;
		KillBabies();
	}
	
if(gameOver == 0)
	{	
		this.renderer.enabled = false;
	}
}

function OnMouseDown()
	{
		if (gameOver == 1)
		{
			gameOver = 0;
    		Score.score = 0;
    		
			Application.LoadLevel(Application.loadedLevel);	
	}
}

function KillBabies()
{
		var baby1 : GameObject = GameObject.Find("Baby");
		
		if(GameObject.Find("Baby 2"))
		{
		var baby2 : GameObject = GameObject.Find("Baby 2");
		Destroy(baby2);
		}
		Destroy(baby1);
		
}