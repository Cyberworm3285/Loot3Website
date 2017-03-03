using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Loot3Framework.Interfaces;
using Loot3Framework.Types.Classes.BaseClasses;
using Loot3Framework.Types.Classes.Algorithms.TypeFetching;

namespace TestApi.LootLogic
{
    public class LootHandler : BaseLootHolder<string>
    {
        private static LootHandler instance;

        public LootHandler() 
            : base(new FetchByInheritance<string>(typeof(ILootable<string>))) { }

        public static LootHandler Instance
        {
            get { return instance ?? (instance = new LootHandler()); }
        }
    }
}
