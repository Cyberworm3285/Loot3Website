using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LootAPI.Models
{
    public class ItemWrapper
    {
        public string Item { get; set; }
        public string Name { get; set; }
        public int Rarity { get; set; }
        public string RarName { get; set; }
        public string Type { get; set; }
        public double Probobility { get; set; }
    }
}
