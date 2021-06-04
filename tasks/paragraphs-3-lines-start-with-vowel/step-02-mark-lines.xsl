<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes"/>

    <xsl:import href="../common/identity.xsl"/>

    <xsl:template match="line">
        <xsl:copy>
            <xsl:attribute name="starts-with-vowel">
                <xsl:value-of select="substring(w[1], 1, 1) = ('a', 'e', 'i', 'o', 'u')"/>
            </xsl:attribute>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>
