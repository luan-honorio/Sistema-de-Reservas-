//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace api_webSpecialEdition
{
    using System;
    using System.Collections.Generic;
    using Newtonsoft.Json;

    public partial class ItemPicture
    {
        public long ID { get; set; }
        public System.Guid GUID { get; set; }
        public long ItemID { get; set; }
        public string PictureFileName { get; set; }

        [JsonIgnore] 
        public virtual Item Item { get; set; }
    }
}
