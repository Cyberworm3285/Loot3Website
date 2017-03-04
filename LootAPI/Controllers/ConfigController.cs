using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using static Newtonsoft.Json.JsonConvert;

using LootAPI.Models;
using LootAPI.LootLogic;

namespace LootAPI.Controllers
{
    [Route("api/Config")]
    public class ConfigController : Controller
    {
        //[HttpPut]
        public void SetConfig(string json)
        {
            ConfigWrapper wrapper = DeserializeObject<ConfigWrapper>(json);
            LootHandler.SetConfig(wrapper);
        }

        [HttpGet]
        public JsonResult GetConfig()
        {
            return Json(LootHandler.GetConfig());
        }
    }
}