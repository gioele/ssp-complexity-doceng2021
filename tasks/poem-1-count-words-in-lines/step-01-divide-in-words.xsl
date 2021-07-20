<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes"/>

    <xsl:import href="../common/identity.xsl"/>

    <xsl:template match="line/text()">
        <xsl:for-each select="tokenize(.)">
            <word><xsl:value-of select="."/></word>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>