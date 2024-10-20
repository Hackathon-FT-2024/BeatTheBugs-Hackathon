﻿using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class RelCptPop
    {
        [Key]
        public int Ident { get; set; }
        public int IdentCpt { get; set; }
        public CptAlim? CptAlim { get; set; }
        public int IdentPopulation { get; set; }
        public TypePopulation? TypePopulation { get; set; }
    }
}
