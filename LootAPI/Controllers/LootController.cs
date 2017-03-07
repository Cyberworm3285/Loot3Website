using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Newtonsoft.Json;

using Loot3Framework.ExtensionMethods.CollectionOperations;

using LootAPI.LootLogic;
using LootAPI.Models;

namespace TestApi.Controllers
{
    [Route("api/Looting")]
    public class LootController : Controller
    {
        [HttpGet("Get")]
        public JsonResult Loot()
        {
            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.Formatting = Formatting.Indented;
            return Json(LootHandler.Instance.GetConfiguredLoot(),settings);
        }

        [HttpGet("Get/{c}")]
        public JsonResult Loot(int c)
        {
            ItemWrapper[] items = new ItemWrapper[c];
            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.Formatting = Formatting.Indented;
            for (int i = 0; i < c; i++)
            {
                items[i] = LootHandler.Instance.GetConfiguredLoot();
            }
            return Json(items, settings);
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
