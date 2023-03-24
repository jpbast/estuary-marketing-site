// NOTE: We're assuming that the image name follows the convention of
// (source|materialization)-name
const CONNECTOR_IMAGE_RE = /(source|materialize)-([a-z\-]+)/

export const normalizeConnector = (connector: any) => {
    const regex_result = connector.imageName.match(CONNECTOR_IMAGE_RE)
    const type = connector.connectorTagsByConnectorIdList?.[0]?.protocol as
        | "capture"
        | "materialization"
    return {
        id: connector.id,
        externalUrl: connector.externalUrl,
        imageName: connector.imageName,
        shortDescription: connector.shortDescription?.["en-US"],
        longDescription: connector.longDescription?.["en-US"],
        title: connector.title?.["en-US"],
        logoUrl: connector.logoUrl?.["en-US"],
        logo: connector.logo,
        recommended: connector.recommended,
        type,
        slug: regex_result
            ? `/${type === "capture" ? "source" : "destination"}/${
                  regex_result[2]
              }`
            : null,
    }
}
