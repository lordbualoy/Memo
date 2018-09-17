public class DefaultController : Controller
{
	[HttpPost]
	public ActionResult Edit()
	{
		try
		{
			businessLayer.Edit( /* some parameters */)
			return Ok();
		}
		 catch(BadAcctionException)		//user error
		{
			TempData[Error] = "Bad business operation";
			return BadBusinessAction();
		}
		catch(ApplicationException ex)	//legit error
		{
			TempData[Error] = ex.Message;
			return Fail();
		}
	}
}