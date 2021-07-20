<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output omit-xml-declaration="yes" method="text"/>

  <xsl:template match="/">
    <xsl:value-of select="string-join(
        //line/count(
            ./w[(
               if (preceding::w[1]/ends-with(., '-')) then 0
                else if (ends-with(., '-')) then
                  (string-length(.) - 1) + string-length(following::w[1])
                else
                  string-length(.)
         ) > 2 ]),
    '; ')"/>
  </xsl:template>
</xsl:stylesheet>
