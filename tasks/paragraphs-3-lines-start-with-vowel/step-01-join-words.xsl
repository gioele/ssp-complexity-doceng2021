<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes"/>

    <xsl:import href="../common/identity.xsl"/>

    <xsl:template match="w[last()][ends-with(., '-')]">
        <xsl:copy>
            <xsl:variable name="cur" select="replace(., '-', '')"/>
            <xsl:variable name="next" select="replace(following::w[1], '-', '')"/>
            <xsl:value-of select="concat($cur, $next)"/>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="w[1][starts-with(., '-')]"/>
    <!--
    <xsl:template match="line/text()[preceding-sibling::w[1][starts-with(., '-')]]"/>
    -->
</xsl:stylesheet>