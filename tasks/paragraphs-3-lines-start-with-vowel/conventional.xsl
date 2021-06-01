<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output omit-xml-declaration="yes" method="text"/>

  <xsl:template match="/">
    <xsl:value-of select="string-join(
      //line[(
                if (starts-with(w[1], '-')) then (w[2]) else (w[1])
              )[
                starts-with(., 'a') or starts-with(., 'e') or starts-with(., 'i') or starts-with(., 'o') or starts-with(., 'u')
               ]
            ]/(
                string-join((
                    w!(
                        if (not(preceding-sibling::w)) then
                            if (starts-with(., '-')) then () else text()
                        else (
                            if (following-sibling::w) then
                                text()
                            else (
                                if (ends-with(., '-')) then
                                    concat(replace(text(), '-', ''), replace(following::w[1], '-', ''))
                                else
                                    text()
                            )
                        )
                    )
                ), ' ')
           ),
      '; ')"/>
  </xsl:template>
</xsl:stylesheet>
