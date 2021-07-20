<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output omit-xml-declaration="yes" method="text"/>

  <xsl:template match="/">
    <xsl:variable name="results" select="(
      //para/lb[1]/preceding-sibling::text()/count(tokenize(.)[string-length(.)>3]),
      //para/lb/following-sibling::text()/count(tokenize(.)[string-length(.)>3])
    )"/>
    <xsl:value-of select="string-join($results, '; ')"/>
  </xsl:template>

</xsl:stylesheet>
