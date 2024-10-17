﻿using System.ComponentModel.DataAnnotations;

namespace CoPhaAPI.Models
{
    public class Effet
    {
        [Key]
        public int Ident { get; set; }
        public string? NomEffet { get; set; }

        public List<CptAlim>? ListComplement { get; set; }
    }
}
