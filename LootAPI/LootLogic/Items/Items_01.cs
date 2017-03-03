using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Loot3Framework.Types.Classes.BaseClasses;
using Loot3Framework.Interfaces;
using Loot3Framework.Types.Classes.ItemProperties;
using Loot3Framework.Types.Structs;

namespace TestApi.LootLogic.Items
{
    public class Item_01 : BasePP_StringItem
    {
        public Item_01()
        {
            rarity = 500;
            name = "Schwert";
            type = "Waffe/Scharf";
            attributes = new IItemProperty[]
            {
                new NameOnlyProp("Arrrrr"),
                new SingleIntervallProp("Schaden", new Intervall(0,11)),
            };
        }
    }

    public class Item_02 : BasePP_StringItem
    {
        public Item_02()
        {
            rarity = 500;
            name = "Sniper";
            type = "Gewehr/Langdistanz";
            attributes = new IItemProperty[]
            {
                new SingleIntervallProp("Effektive Distanz", new Intervall(1000,1500)),
                new SingleIntervallProp("Schaden", new Intervall(15,21))
            };
        }
    }
}
