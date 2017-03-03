using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using TestApi.LootLogic;
using Loot3Framework.Types.Classes.Algorithms.Looting;

namespace TestApi.Controllers
{
    [Route("api/[controller]")]
    public class LootController : Controller
    {
        //[HttpGet]
        public ContentResult Loot()
        {
            string result = LootHandler.Instance.GetLoot(
                    new RandomLoot<string>()
                ).Item;

            return Content(result);
        }

        [HttpGet]
        public ContentResult SampleJSON()
        {
            ItemDataWrapper wrapper = new ItemDataWrapper() { lowerRar = 0, name = "dummy", rarName = "normal", type = "dummytype", upperRar = 1000 };
            return Content(wrapper.ToJSON());
        }

        #region Old

        // GET api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}
        //
        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}
        //
        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}
        //
        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}
        //
        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
        #endregion
    }
}
