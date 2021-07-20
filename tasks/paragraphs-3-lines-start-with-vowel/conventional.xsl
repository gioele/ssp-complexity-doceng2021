<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output omit-xml-declaration="yes" method="text"/>

  <xsl:template match="/">
    <xsl:value-of select="string-join(
      //line[
        substring(
          string-join((
                    w ! (
                        if (preceding::w[1]/ends-with(., '-')) then ()
                        else if (ends-with(., '-')) then
                          replace(., '-', '') || following::w[1]
                        else .
                    )
          ), ' '),
          1, 1
        ) = ('a', 'e', 'i', 'o', 'u')
      ]/data(@n), '; ')"/>
  </xsl:template>
</xsl:stylesheet>
