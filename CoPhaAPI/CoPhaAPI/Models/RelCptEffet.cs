﻿using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class RelCptEffet
    {
        [Key]
        public int Ident { get; set; }
        public int IdentCpt { get; set; }
        public CptAlim? CptAlim { get; set; }
        public int IdentEffet { get; set; }
        public Effet? Effet { get; set; }
    }
}
