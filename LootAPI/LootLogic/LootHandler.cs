using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Loot3Framework.Interfaces;
using Loot3Framework.Types.Classes.BaseClasses;
using Loot3Framework.Types.Classes.Algorithms.TypeFetching;
using Loot3Framework.Types.Classes.Algorithms.Looting;
using Loot3Framework.Types.Classes.Algorithms.Filter;

using LootAPI.Models;

namespace LootAPI.LootLogic
{
    public class LootHandler : BaseLootHolder<string>
    {
        private static LootHandler instance;
        private static ConfigWrapper config; 


        public LootHandler() 
            : base(new FetchByInheritance<string>(typeof(ILootable<string>)))
        {
            config = new ConfigWrapper()
            {
                AllowedRars = null,
                AllowedTypes = null,
                LowerRar = 0,
                UpperRar = 1000,
                Name = null,
                RarContains = null,
                TypeContains = null
            };
        }

        public static LootHandler Instance
        {
            get { return instance ?? (instance = new LootHandler()); }
        }

        public static void SetConfig(ConfigWrapper _config)
        {
            config = _config;
        }

        public static ConfigWrapper GetConfig()
        {
            return config;
        }

        public ItemWrapper GetConfiguredLoot()
        {
            ILootable<string> item =  GetLoot(
                    new RandomLoot<string>(),
                    new ConfigurableFilter(
                            _nameContains:      config.Name,
                            _typeContains:      config.TypeContains,
                            _rarityName:        config.RarContains,
                            _allowedRarities:   config.AllowedRars,
                            _allowedTypes:      config.AllowedTypes,
                            _rarityLowerBound:  config.LowerRar,
                            _rarityUpperBound:  config.UpperRar
                        )
                );
            ItemWrapper result = new ItemWrapper() {
                Item =      item.Item,
                Rarity =    item.Rarity,
                RarName =   item.RarityName,
                Name=       item.Name,
                Type=       item.Type
            };

            return result;
        }
    }
}
