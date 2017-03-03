using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using static Newtonsoft.Json.JsonConvert;

namespace TestApi.LootLogic
{
    [Serializable]
    public class ItemDataWrapper
    {
        public string name { get; set; }
        public string type { get; set; }
        public int lowerRar { get; set; }
        public int upperRar { get; set; }
        public string rarName { get; set; }

        public ItemDataWrapper FromJSON(string json)
        {
            return DeserializeObject<ItemDataWrapper>(json);
        }

        public string ToJSON()
        {
            return SerializeObject(this);
        }
    }
}
