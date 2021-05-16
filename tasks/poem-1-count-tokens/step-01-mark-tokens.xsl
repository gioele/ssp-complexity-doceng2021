<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output omit-xml-declaration="yes" method="xml"/>
  <xsl:import href="../common/identity.xsl"></xsl:import>
 
  <xsl:template match="//text()">
    <xsl:for-each select="tokenize(.)">
      <token><xsl:value-of select="."/></token>
    </xsl:for-each>
  </xsl:template>
  
</xsl:stylesheet>