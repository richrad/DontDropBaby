var babyGiggle : AudioSource;  

function Update () 
{

}

function OnMouseDown () 
{
	babyGiggle.Play();
	Score.score++;
	
	var maxX = 5 + (Score.score * 0.5);
	var randX = Random.Range(-5,maxX);
	
	var maxY = 25 + (Score.score * 0.5);
	var randY = Random.Range(15,maxY);
	
	
	var power: Vector3 = Vector3(randX,randY,0);
    this.rigidbody.AddForce(power, ForceMode.Impulse);
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.CompareTag("Bottom"))
	{
		var BabyCry = GameObject.Find("BabyCry");
		BabyCry.audio.Play();
		PlayAgain.gameOver = 1;
	}
}