using System;

namespace LootAPI.Models
{
    public class ConfigWrapper
    {
    	public string Name { get; set; }
        public int LowerRar { get; set; }
        public int UpperRar { get; set; }
        public string TypeContains { get; set; }
        public string RarContains { get; set; }
        public string[] AllowedTypes { get; set; }
        public string[] AllowedRars { get; set; }
    }
}

